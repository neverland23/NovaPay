import { NextRequest, NextResponse } from 'next/server';
import { authenticateUser } from './src/lib/auth-middleware';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /dashboard, /my-profile and /api/profile routes
  const protectedRoutes = [
    '/dashboard',
    '/my-profile',
    '/transactions',
    '/request-money',
    '/withdraw-money',
    '/dashboard-contact',
  ];

  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route)) || pathname.startsWith('/api/profile');

  if (isProtectedRoute) {
    const { user, error } = await authenticateUser(request);

    if (error || !user) {
      if (pathname.startsWith('/api/profile')) {
        return NextResponse.json(
          { error: error || 'Not authenticated' },
          { status: 401 }
        );
      }

      // Redirect to login for page routes
      const loginUrl = new URL('/log-in', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Redirect authenticated users from home page to dashboard
  if (pathname === '/') {
    const { user, error } = await authenticateUser(request);
    if (!error && user) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/dashboard/:path*',
    '/my-profile/:path*',
    '/transactions/:path*',
    '/request-money/:path*',
    '/withdraw-money/:path*',
    '/dashboard-contact/:path*',
    '/api/profile/:path*',
  ],
};



