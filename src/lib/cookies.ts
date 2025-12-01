import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const ACCESS_TOKEN_COOKIE = 'accessToken';
const REFRESH_TOKEN_COOKIE = 'refreshToken';
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
};

export const setAuthCookies = (response: NextResponse, accessToken: string, refreshToken: string) => {
  const accessTokenExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
  const refreshTokenExpires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

  response.cookies.set(ACCESS_TOKEN_COOKIE, accessToken, {
    ...COOKIE_OPTIONS,
    expires: accessTokenExpires,
  });

  response.cookies.set(REFRESH_TOKEN_COOKIE, refreshToken, {
    ...COOKIE_OPTIONS,
    expires: refreshTokenExpires,
  });

  return response;
};

export const clearAuthCookies = (response: NextResponse) => {
  response.cookies.delete(ACCESS_TOKEN_COOKIE);
  response.cookies.delete(REFRESH_TOKEN_COOKIE);
  return response;
};

export const getAccessTokenFromCookie = async (request?: NextRequest): Promise<string | null> => {
  if (request) {
    return request.cookies.get(ACCESS_TOKEN_COOKIE)?.value || null;
  }
  
  // Server-side usage with cookies() - Next.js 15 returns a Promise
  const cookieStore = await cookies();
  return cookieStore.get(ACCESS_TOKEN_COOKIE)?.value || null;
};

export const getRefreshTokenFromCookie = async (request?: NextRequest): Promise<string | null> => {
  if (request) {
    return request.cookies.get(REFRESH_TOKEN_COOKIE)?.value || null;
  }
  
  // Server-side usage with cookies() - Next.js 15 returns a Promise
  const cookieStore = await cookies();
  return cookieStore.get(REFRESH_TOKEN_COOKIE)?.value || null;
};




