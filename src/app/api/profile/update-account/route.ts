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
    const { firstName, lastName, phone, avatar, accountType } = body;

    await connectDB();

    const userDoc = await User.findById(user.userId);
    if (!userDoc) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Update fields
    if (firstName !== undefined) userDoc.firstName = firstName;
    if (lastName !== undefined) userDoc.lastName = lastName;
    if (phone !== undefined) userDoc.phone = phone;
    if (avatar !== undefined) userDoc.avatar = avatar;
    if (accountType !== undefined && ['individual', 'team'].includes(accountType)) {
      userDoc.accountType = accountType;
    }

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
        passwordLastChanged: userDoc.passwordLastChanged ?? userDoc.createdAt,
      },
    });
  } catch (error: any) {
    console.error('Update account error:', error);
    return NextResponse.json(
      { error: error.message || 'Update failed' },
      { status: 500 }
    );
  }
}



