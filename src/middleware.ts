import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export const config = {
  matcher: ['/admin/:path*'],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow /admin/login without authentication
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Read session cookie
  const token = request.cookies.get('aether_admin')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Verify JWT signature and expiration
  try {
    const secret = process.env.ADMIN_SESSION_SECRET;
    if (!secret) {
      console.error('[middleware] ADMIN_SESSION_SECRET not configured');
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    const encodedSecret = new TextEncoder().encode(secret);
    await jwtVerify(token, encodedSecret);

    return NextResponse.next();
  } catch {
    // Invalid or expired token — clear cookie and redirect
    const response = NextResponse.redirect(new URL('/admin/login', request.url));
    response.cookies.delete('aether_admin');
    return response;
  }
}
