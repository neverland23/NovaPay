import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import PasswordResetToken from '@/models/PasswordResetToken';
import { generatePasswordResetToken } from '@/lib/jwt';
import { sendPasswordResetEmail } from '@/lib/email';

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

    const user = await User.findOne({ email: email.toLowerCase() });

    // Don't reveal if email exists or not (security best practice)
    if (user) {
      // Delete any existing reset tokens for this email
      await PasswordResetToken.deleteMany({ email: user.email });

      // Generate reset token
      const token = generatePasswordResetToken();
      const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

      // Store token in database
      await PasswordResetToken.create({
        email: user.email,
        token,
        expiresAt,
      });

      // Send password reset email
      try {
        await sendPasswordResetEmail(user.email, user.name, token);
        console.log(`[Forgot Password] Password reset email sent successfully to ${user.email}`);
      } catch (emailError: any) {
        console.error('[Forgot Password] Error sending password reset email:', emailError);
        console.error('[Forgot Password] Email error details:', {
          email: user.email,
          error: emailError.message,
          stack: emailError.stack,
        });
        
        // In development, log but continue. In production, we should still continue
        // but log the error so it's visible in logs
        // The token is created, user can check logs for the link in dev
        if (process.env.NODE_ENV === 'production') {
          console.error('[Forgot Password] ⚠️  Password reset token created but email failed to send. Check email service configuration.');
        } else {
          // In development, also log the token to console for testing
          console.log(`[Forgot Password] Development mode - Password reset token: ${token}`);
          console.log(`[Forgot Password] Development mode - Reset link: ${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/reset-password?token=${token}`);
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: 'If an account exists with that email, a password reset link has been sent.',
    });
  } catch (error: any) {
    console.error('[Forgot Password] Error:', error);
    console.error('[Forgot Password] Error details:', {
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: error.message || 'Failed to process request' },
      { status: 500 }
    );
  }
}




