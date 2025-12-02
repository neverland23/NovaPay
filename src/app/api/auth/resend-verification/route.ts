import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { generateEmailVerificationToken } from '@/lib/jwt';
import { sendResendVerificationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    await connectDB();

    // Find user
    const user = await User.findOne({ email: email.toLowerCase() }).select('+emailVerificationToken');

    if (!user) {
      // Don't reveal if email exists (security best practice)
      return NextResponse.json({
        success: true,
        message: 'If an account exists with that email, a new verification link has been sent.',
      });
    }

    // Check if already verified
    if (user.emailVerified) {
      return NextResponse.json(
        { error: 'Email is already verified' },
        { status: 400 }
      );
    }

    // Generate new verification token
    const emailVerificationToken = generateEmailVerificationToken();
    const emailVerificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Update user with new token
    user.emailVerificationToken = emailVerificationToken;
    user.emailVerificationExpires = emailVerificationExpires;
    await user.save({ validateBeforeSave: false });

    // Send verification email
    try {
      await sendResendVerificationEmail(user.email, user.name, emailVerificationToken);
      console.log(`[Resend Verification] Verification email sent successfully to ${user.email}`);
      
      return NextResponse.json({
        success: true,
        message: 'If an account exists with that email, a new verification link has been sent.',
      });
    } catch (emailError: any) {
      console.error('[Resend Verification] Error sending verification email:', emailError);
      console.error('[Resend Verification] Email error details:', {
        email: user.email,
        error: emailError.message,
        stack: emailError.stack,
      });
      
      // Return error response so the frontend knows the email failed
      return NextResponse.json(
        { 
          error: 'Failed to send verification email. Please try again later or contact support.',
          details: process.env.NODE_ENV === 'development' ? emailError.message : undefined,
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Resend verification error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to resend verification email' },
      { status: 500 }
    );
  }
}

