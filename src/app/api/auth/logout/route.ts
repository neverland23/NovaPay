import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { getRefreshTokenFromCookie } from '@/lib/cookies';
import { clearAuthCookies } from '@/lib/cookies';
import { verifyRefreshToken } from '@/lib/jwt';

export async function POST(request: NextRequest) {
  try {
    const refreshToken = getRefreshTokenFromCookie(request);

    if (refreshToken) {
      try {
        const decoded = verifyRefreshToken(refreshToken);
        await connectDB();
        
        // Clear refresh token from database
        await User.findByIdAndUpdate(decoded.userId, {
          $unset: { refreshToken: 1 },
        });
      } catch (error) {
        // Token is invalid, continue with logout anyway
      }
    }

    const response = NextResponse.json({ success: true });
    return clearAuthCookies(response);
  } catch (error: any) {
    console.error('Logout error:', error);
    const response = NextResponse.json({ success: true });
    return clearAuthCookies(response);
  }
}



