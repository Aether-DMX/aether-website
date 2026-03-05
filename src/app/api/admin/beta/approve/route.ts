import { NextRequest, NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/adminSession';
import { createSupabaseAdminClient } from '@/lib/supabaseAdmin';
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

    const supabase = createSupabaseAdminClient();

    // Update status to approved
    const { error: updateError } = await supabase
      .from('beta_signups')
      .update({ status: 'approved' })
      .eq('signup_id', signup_id);

    if (updateError) {
      console.error('Update error:', updateError.message);
      return NextResponse.json(
        { ok: false, error: 'Failed to update signup status' },
        { status: 500 }
      );
    }

    // Send approval email via Resend
    if (email && full_name) {
      const emailResult = await sendEmail({
        to: email,
        subject: "You're approved for the Aether DMX Beta!",
        react: React.createElement(BetaApproval, { fullName: full_name }),
      });

      if (!emailResult.success) {
        console.error('Approval email failed:', emailResult.error);
        return NextResponse.json(
          { ok: false, error: 'Approval saved but invite email failed to send' },
          { status: 502 }
        );
      }
    }

    // Audit log
    const ip = getClientIp(request);
    logAuditEvent({
      action: 'approve',
      target_email: email || undefined,
      target_signup_id: signup_id,
      ip_address: ip,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Approve error:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
