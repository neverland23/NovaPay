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
    const { twoFactorEnabled } = body;

    if (typeof twoFactorEnabled !== 'boolean') {
      return NextResponse.json(
        { error: 'twoFactorEnabled must be a boolean' },
        { status: 400 }
      );
    }

    await connectDB();

    const userDoc = await User.findById(user.userId);
    if (!userDoc) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    userDoc.twoFactorEnabled = twoFactorEnabled;
    await userDoc.save();

    return NextResponse.json({
      success: true,
      user: {
        _id: userDoc._id.toString(),
        name: userDoc.name,
        email: userDoc.email,
        accountType: userDoc.accountType,
        firstName: userDoc.firstName,
        lastName: userDoc.lastName,
        phone: userDoc.phone,
        avatar: userDoc.avatar,
        twoFactorEnabled: userDoc.twoFactorEnabled,
        wallet: userDoc.wallet,
        securityQuestions: userDoc.securityQuestions,
      },
    });
  } catch (error: any) {
    console.error('Two-factor update error:', error);
    return NextResponse.json(
      { error: error.message || 'Update failed' },
      { status: 500 }
    );
  }
}



