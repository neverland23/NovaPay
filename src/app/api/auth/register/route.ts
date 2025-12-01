import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import Bank from '@/models/Bank';
import { generateAccessToken, generateRefreshToken } from '@/lib/jwt';
import { setAuthCookies } from '@/lib/cookies';
import { generateBankData } from '@/lib/generate-bank-data';

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const MAX_REQUESTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many registration attempts. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email, password, name, accountType = 'individual' } = body;

    // Validation
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Email, password, and name are required' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    // Create user
    const user = await User.create({
      email: email.toLowerCase(),
      password,
      name,
      accountType,
    });

    // Generate tokens
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

    // Refresh user to get passwordLastChanged
    const updatedUser = await User.findById(user._id);

    // Auto-generate bank data
    try {
      const bankData = generateBankData(user._id, user.name);
      await Bank.create(bankData);
    } catch (bankError: any) {
      console.error('Error creating bank data:', bankError);
      // Continue even if bank creation fails
    }

    // Set cookies
    const response = NextResponse.json({
      success: true,
      user: {
        _id: updatedUser?._id.toString(),
        name: updatedUser?.name,
        email: updatedUser?.email,
        accountType: updatedUser?.accountType,
        firstName: updatedUser?.firstName,
        lastName: updatedUser?.lastName,
        phone: updatedUser?.phone,
        avatar: updatedUser?.avatar,
        twoFactorEnabled: updatedUser?.twoFactorEnabled,
        wallet: updatedUser?.wallet,
        securityQuestions: updatedUser?.securityQuestions,
        passwordLastChanged: updatedUser?.passwordLastChanged ?? updatedUser?.createdAt,
      },
    });

    return setAuthCookies(response, accessToken, refreshToken);
  } catch (error: any) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: error.message || 'Registration failed' },
      { status: 500 }
    );
  }
}



