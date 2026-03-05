import { NextRequest, NextResponse } from 'next/server';
import {
  validateAdminCredentials,
  createAdminSessionToken,
  setAdminSessionCookie,
} from '@/lib/adminSession';
import { rateLimit, getClientIp } from '@/lib/rateLimit';
import { logAuditEvent } from '@/lib/auditLog';

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 5 attempts per 15 minutes per IP
    const ip = getClientIp(request);
    const rl = rateLimit({ key: `login:${ip}`, limit: 5, windowMs: 15 * 60 * 1000 });

    if (!rl.success) {
      return NextResponse.json(
        { ok: false, error: 'Too many login attempts. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { ok: false, error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const isValid = await validateAdminCredentials(email, password);

    if (!isValid) {
      return NextResponse.json(
        { ok: false, error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const token = await createAdminSessionToken();
    await setAdminSessionCookie(token);

    // Log successful login
    logAuditEvent({ action: 'login', ip_address: ip });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Login error:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
