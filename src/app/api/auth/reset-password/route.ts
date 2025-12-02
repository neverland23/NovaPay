import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import PasswordResetToken from '@/models/PasswordResetToken';
import { verifyPasswordResetToken } from '@/lib/jwt';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { token, newPassword } = body;

    if (!token || !newPassword) {
      return NextResponse.json(
        { error: 'Token and new password are required' },
        { status: 400 }
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    // Verify token format first (quick validation)
    if (!verifyPasswordResetToken(token)) {
      console.warn('[Reset Password] Invalid token format');
      return NextResponse.json(
        { error: 'Invalid or expired reset token' },
        { status: 400 }
      );
    }

    await connectDB();

    // Find token in database
    const resetToken = await PasswordResetToken.findOne({
      token,
      expiresAt: { $gt: new Date() },
    });

    if (!resetToken) {
      console.warn('[Reset Password] Token not found or expired in database');
      return NextResponse.json(
        { error: 'Invalid or expired reset token' },
        { status: 400 }
      );
    }

    // Find user
    const user = await User.findOne({ email: resetToken.email }).select('+password');
    if (!user) {
      console.error('[Reset Password] User not found for email:', resetToken.email);
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Update password (User model pre-save hook will hash it automatically)
    user.password = newPassword;
    await user.save();

    console.log(`[Reset Password] Password reset successful for user: ${user.email}`);

    // Delete reset token (and any other tokens for this email)
    await PasswordResetToken.deleteMany({ email: user.email });

    return NextResponse.json({
      success: true,
      message: 'Password reset successful',
    });
  } catch (error: any) {
    console.error('[Reset Password] Error:', error);
    console.error('[Reset Password] Error details:', {
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: error.message || 'Failed to reset password' },
      { status: 500 }
    );
  }
}




