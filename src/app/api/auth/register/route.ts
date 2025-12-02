import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import Bank from '@/models/Bank';
import { generateEmailVerificationToken } from '@/lib/jwt';
import { sendVerificationEmail } from '@/lib/email';
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

    // Generate email verification token
    const emailVerificationToken = generateEmailVerificationToken();
    const emailVerificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Create user (email not verified yet)
    const user = await User.create({
      email: email.toLowerCase(),
      password,
      name,
      accountType,
      emailVerified: false,
      emailVerificationToken,
      emailVerificationExpires,
    });

    // Auto-generate bank data
    try {
      const bankData = generateBankData(user._id, user.name);
      await Bank.create(bankData);
    } catch (bankError: any) {
      console.error('Error creating bank data:', bankError);
      // Continue even if bank creation fails
    }

    // Send verification email
    try {
      await sendVerificationEmail(user.email, user.name, emailVerificationToken);
      console.log(`[Register] Verification email sent successfully to ${user.email}`);
    } catch (emailError: any) {
      console.error('[Register] Error sending verification email:', emailError);
      console.error('[Register] Email error details:', {
        email: user.email,
        error: emailError.message,
        stack: emailError.stack,
      });
      
      // In development, log but continue. In production, we should still continue
      // but log the error so it's visible in logs
      // The user account is created, they can request a new verification email
      if (process.env.NODE_ENV === 'production') {
        console.error('[Register] ⚠️  User account created but verification email failed to send. User can request a new email.');
      }
    }

    // Return success without setting auth cookies
    // User must verify email before accessing dashboard
    return NextResponse.json({
      success: true,
      message: 'Registration successful! Please check your email to verify your account.',
      email: user.email,
      emailVerified: false,
    });
  } catch (error: any) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: error.message || 'Registration failed' },
      { status: 500 }
    );
  }
}



