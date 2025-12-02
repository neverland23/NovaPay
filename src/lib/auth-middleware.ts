import { NextRequest, NextResponse } from 'next/server';
import { getAccessTokenFromCookie, getRefreshTokenFromCookie } from './cookies';
import { verifyAccessToken, verifyRefreshToken, generateAccessToken } from './jwt';
import connectDB from './mongodb';
import User from '@/models/User';

export interface AuthenticatedRequest extends NextRequest {
  user?: {
    userId: string;
    email: string;
  };
}

export async function authenticateUser(request: NextRequest): Promise<{
  user: { userId: string; email: string; emailVerified: boolean } | null;
  error: string | null;
}> {
  try {
    const accessToken = await getAccessTokenFromCookie(request);

    if (!accessToken) {
      // Try refresh token
      const refreshToken = await getRefreshTokenFromCookie(request);
      
      if (!refreshToken) {
        return { user: null, error: 'No authentication token found' };
      }

      try {
        const decoded = verifyRefreshToken(refreshToken);
        await connectDB();
        
        const user = await User.findById(decoded.userId).select('+refreshToken');
        
        if (!user || user.refreshToken !== refreshToken) {
          return { user: null, error: 'Invalid refresh token' };
        }

        // Generate new access token
        const newAccessToken = generateAccessToken({
          userId: user._id.toString(),
          email: user.email,
        });

        return {
          user: {
            userId: user._id.toString(),
            email: user.email,
            emailVerified: user.emailVerified || false,
          },
          error: null,
        };
      } catch (refreshError) {
        return { user: null, error: 'Invalid or expired refresh token' };
      }
    }

    try {
      const decoded = verifyAccessToken(accessToken);
      await connectDB();
      
      // Fetch user to check email verification status
      const user = await User.findById(decoded.userId);
      
      if (!user) {
        return { user: null, error: 'User not found' };
      }

      return {
        user: {
          userId: decoded.userId,
          email: decoded.email,
          emailVerified: user.emailVerified || false,
        },
        error: null,
      };
    } catch (error) {
      return { user: null, error: 'Invalid or expired access token' };
    }
  } catch (error: any) {
    return { user: null, error: error.message || 'Authentication failed' };
  }
}




