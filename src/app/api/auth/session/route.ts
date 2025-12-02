import { NextRequest, NextResponse } from 'next/server';
import { authenticateUser } from '@/lib/auth-middleware';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function GET(request: NextRequest) {
  try {
    const { user, error } = await authenticateUser(request);

    if (error || !user) {
      return NextResponse.json(
        { error: error || 'Not authenticated' },
        { status: 401 }
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

    return NextResponse.json({
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
        passwordLastChanged: userDoc.passwordLastChanged ?? userDoc.createdAt,
        createdAt: userDoc.createdAt,
        emailVerified: userDoc.emailVerified || false,
      },
    });
  } catch (error: any) {
    console.error('Session error:', error);
    return NextResponse.json(
      { error: error.message || 'Session check failed' },
      { status: 500 }
    );
  }
}



