import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import Bank from '@/models/Bank';
import { generateAccessToken, generateRefreshToken } from '@/lib/jwt';
import { setAuthCookies } from '@/lib/cookies';
import { generateBankData } from '@/lib/generate-bank-data';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get('code');
    const state = searchParams.get('state');

    if (!code) {
      // Redirect to Google OAuth
      const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID!,
        redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/auth/google`,
        response_type: 'code',
        scope: 'openid email profile',
        access_type: 'offline',
        prompt: 'consent',
      })}`;

      return NextResponse.redirect(googleAuthUrl);
    }

    // Exchange code for tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/auth/google`,
        grant_type: 'authorization_code',
      }),
    });

    const tokens = await tokenResponse.json();

    if (!tokens.access_token) {
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/log-in?error=oauth_failed`
      );
    }

    // Get user info from Google
    const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    });

    const googleUser = await userInfoResponse.json();

    if (!googleUser.email) {
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/log-in?error=oauth_failed`
      );
    }

    await connectDB();

    // Find or create user
    let user = await User.findOne({
      $or: [{ email: googleUser.email }, { googleId: googleUser.id }],
    });

    let isNewUser = false;

    if (user) {
      // Update Google ID if not set
      if (!user.googleId) {
        user.googleId = googleUser.id;
      }
      // Mark email as verified (Google already verified it)
      if (!user.emailVerified) {
        user.emailVerified = true;
      }
      await user.save();
    } else {
      // Create new user - email is already verified by Google
      isNewUser = true;
      user = await User.create({
        email: googleUser.email,
        name: googleUser.name || googleUser.email,
        googleId: googleUser.id,
        firstName: googleUser.given_name,
        lastName: googleUser.family_name,
        avatar: googleUser.picture,
        accountType: 'individual',
        emailVerified: true, // Google OAuth users have verified emails
      });

      // Auto-generate bank data for new Google OAuth users
      try {
        // Check if bank data already exists (shouldn't for new user, but just in case)
        const existingBank = await Bank.findOne({ userId: user._id });
        if (!existingBank) {
          const bankData = generateBankData(user._id, user.name);
          await Bank.create(bankData);
          console.log(`[Google OAuth] Bank data created for new user: ${user.email}`);
        }
      } catch (bankError: any) {
        console.error('[Google OAuth] Error creating bank data:', bankError);
        // Continue even if bank creation fails - user can still log in
      }
    }

    // Generate our tokens
    const accessToken = generateAccessToken({
      userId: user._id.toString(),
      email: user.email,
    });

    const refreshToken = generateRefreshToken({
      userId: user._id.toString(),
      email: user.email,
    });

    // Store refresh token
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    // Set cookies and redirect
    const redirectUrl = new URL('/dashboard', process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000');
    const response = NextResponse.redirect(redirectUrl);
    
    return setAuthCookies(response, accessToken, refreshToken);
  } catch (error: any) {
    console.error('Google OAuth error:', error);
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/log-in?error=oauth_failed`
    );
  }
}



