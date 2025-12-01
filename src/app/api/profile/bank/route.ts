import { NextRequest, NextResponse } from 'next/server';
import { authenticateUser } from '@/lib/auth-middleware';
import connectDB from '@/lib/mongodb';
import Bank from '@/models/Bank';

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

    const bankDoc = await Bank.findOne({ userId: user.userId });

    if (!bankDoc) {
      return NextResponse.json(
        { error: 'Bank information not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      bank: {
        accountNumber: bankDoc.accountNumber,
        routingNumber: bankDoc.routingNumber,
        bankName: bankDoc.bankName,
        bankAddress: bankDoc.bankAddress,
        beneficiaryName: bankDoc.beneficiaryName,
        destinationWalletAddress: bankDoc.destinationWalletAddress,
        walletType: bankDoc.walletType,
        accountType: bankDoc.accountType,
        paymentMethods: bankDoc.paymentMethods,
        currency: bankDoc.currency,
      },
    });
  } catch (error: any) {
    console.error('Get bank info error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch bank information' },
      { status: 500 }
    );
  }
}

