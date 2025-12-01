import { NextRequest, NextResponse } from 'next/server';
import { authenticateUser } from '@/lib/auth-middleware';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request: NextRequest) {
  try {
    const { user, error } = await authenticateUser(request);

    if (error || !user) {
      return NextResponse.json(
        { error: error || 'Not authenticated' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { currentPassword, newPassword } = body;

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: 'Current password and new password are required' },
        { status: 400 }
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        { error: 'New password must be at least 6 characters' },
        { status: 400 }
      );
    }

    await connectDB();

    const userDoc = await User.findById(user.userId).select('+password');
    if (!userDoc || !userDoc.password) {
      return NextResponse.json(
        { error: 'User not found or password not set' },
        { status: 404 }
      );
    }

    // Verify current password
    const isPasswordValid = await userDoc.comparePassword(currentPassword);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Current password is incorrect' },
        { status: 400 }
      );
    }

    // Update password
    userDoc.password = newPassword;
    await userDoc.save();

    // Fetch updated user to get passwordLastChanged
    const updatedUserDoc = await User.findById(user.userId);

    return NextResponse.json({
      success: true,
      message: 'Password changed successfully',
      user: {
        _id: updatedUserDoc?._id.toString(),
        name: updatedUserDoc?.name,
        email: updatedUserDoc?.email,
        accountType: updatedUserDoc?.accountType,
        firstName: updatedUserDoc?.firstName,
        lastName: updatedUserDoc?.lastName,
        phone: updatedUserDoc?.phone,
        avatar: updatedUserDoc?.avatar,
        twoFactorEnabled: updatedUserDoc?.twoFactorEnabled,
        wallet: updatedUserDoc?.wallet,
        securityQuestions: updatedUserDoc?.securityQuestions,
        passwordLastChanged: updatedUserDoc?.passwordLastChanged ?? updatedUserDoc?.createdAt,
      },
    });
  } catch (error: any) {
    console.error('Change password error:', error);
    return NextResponse.json(
      { error: error.message || 'Password change failed' },
      { status: 500 }
    );
  }
}



