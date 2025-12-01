import { NextRequest, NextResponse } from 'next/server';
import { authenticateUser } from '@/lib/auth-middleware';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

const VALID_NETWORKS = ['Ethereum', 'BSC', 'Polygon', 'Solana', 'Tron'];

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
    const { network, address } = body;

    if (!network || !address) {
      return NextResponse.json(
        { error: 'Network and address are required' },
        { status: 400 }
      );
    }

    if (!VALID_NETWORKS.includes(network)) {
      return NextResponse.json(
        { error: `Network must be one of: ${VALID_NETWORKS.join(', ')}` },
        { status: 400 }
      );
    }

    if (typeof address !== 'string' || address.trim().length === 0) {
      return NextResponse.json(
        { error: 'Address must be a valid string' },
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

    userDoc.wallet = {
      network,
      address: address.trim(),
    };

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
      },
    });
  } catch (error: any) {
    console.error('Update wallet error:', error);
    return NextResponse.json(
      { error: error.message || 'Update failed' },
      { status: 500 }
    );
  }
}



