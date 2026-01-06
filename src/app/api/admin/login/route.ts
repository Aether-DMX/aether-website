import { NextRequest, NextResponse } from 'next/server';
import {
  validateAdminCredentials,
  createAdminSessionToken,
  setAdminSessionCookie,
} from '@/lib/adminSession';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { ok: false, error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const isValid = validateAdminCredentials(email, password);

    if (!isValid) {
      return NextResponse.json(
        { ok: false, error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const token = await createAdminSessionToken();
    await setAdminSessionCookie(token);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Login error:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
