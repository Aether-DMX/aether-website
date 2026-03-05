import { NextRequest, NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/adminSession';
import { sendEmail } from '@/lib/resend';
import { logAuditEvent } from '@/lib/auditLog';
import { getClientIp } from '@/lib/rateLimit';
import BetaApproval from '@/emails/BetaApproval';
import React from 'react';

export async function POST(request: NextRequest) {
  try {
    const isAuthed = await isAdminAuthenticated();
    if (!isAuthed) {
      return NextResponse.json(
        { ok: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { signup_id, email, full_name } = body;

    if (!signup_id) {
      return NextResponse.json(
        { ok: false, error: 'signup_id is required' },
        { status: 400 }
      );
    }

    if (!email || !full_name) {
      return NextResponse.json(
        { ok: false, error: 'email and full_name are required' },
        { status: 400 }
      );
    }

    // Send approval email via Resend
    const emailResult = await sendEmail({
      to: email,
      subject: "You're approved for the Aether DMX Beta!",
      react: React.createElement(BetaApproval, { fullName: full_name }),
    });

    if (!emailResult.success) {
      console.error('Resend invite failed:', emailResult.error);
      return NextResponse.json(
        { ok: false, error: emailResult.error || 'Failed to resend invite email' },
        { status: 502 }
      );
    }

    // Audit log
    const ip = getClientIp(request);
    logAuditEvent({
      action: 'resend_invite',
      target_email: email,
      target_signup_id: signup_id,
      ip_address: ip,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Resend error:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
