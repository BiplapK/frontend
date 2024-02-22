import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse;

  // Define paths
  const adminPaths = ['/admin', '/admin/*'];
  const loginPath = '/login';
  const defaultRedirectPath = '/'; // Adjust this to your default redirect path

  try {
    const url = request.nextUrl.clone();

    const urlPath = url.pathname.split('/').filter((x: any) => x !== '');

    const isLoggedIn = !!request.cookies.get('admin-key'); // Use double negation to convert to boolean

    // If the requested path is the login page, allow access
    if (url.pathname === loginPath) {
      return response.next();
    }

    // If user is logged in and trying to access admin paths, allow access
    if (isLoggedIn && adminPaths.includes(url.pathname)) {
      return response.next();
    }

    // If user is not logged in, redirect to login page
    if (
      (!isLoggedIn && adminPaths.includes(url.pathname)) ||
      adminPaths.some((path) => url.pathname.startsWith(path))
    ) {
      return response.redirect(new URL(loginPath, request.url));
    }

    // // For any other case, redirect to the default path
    // url.pathname = defaultRedirectPath;
    // return response.redirect(url);
  } catch (error) {
    console.error(error); // Use console.error for better visibility of errors
    // You might want to handle the error or log it in a more robust way based on your needs
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|nlogo.png).*)',
  ],
};
