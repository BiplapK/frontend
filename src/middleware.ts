import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const authToken = request.cookies.get('admin-key')?.value;
  const roleType = request.cookies.get('role')?.value;

  const isAdminPath = adminPaths.some((route) => pathname.startsWith(route));
  const isLoginPath = loginPaths.some((route) => pathname.startsWith(route));

  // Refactored redirection logic with early return
  if (authToken && isLoginPath) {
    // Handle login routes with auth token first
    return NextResponse.redirect(
      roleType === 'admin'
        ? new URL('/admin', request.url)
        : new URL('/', request.url)
    );
  }

  if (!authToken && isAdminPath) {
    // Enforce auth requirement for admin routes
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Allow authorized admins to remain on admin routes
  if (isAdminPath && roleType === 'admin') {
    return NextResponse.next(); // Pass through if authorized admin on admin route
  }

  // Redirect non-admin users from admin routes
  if (isAdminPath && roleType !== 'admin') {
    return NextResponse.redirect(new URL('/', request.url)); // Redirect to a non-admin route
  }

  // No further logic needed if authorized for current path
  return NextResponse.next(); // Pass through if authorized
}

const adminPaths = ['/admin', '/admin/(.*)'];
const loginPaths = ['/login', '/signup'];

export const config = {
  matcher: [
    '/admin/:path*',
    '/login',
    '/forget-password',
    '/signup',
    '/profile',
  ],
};
