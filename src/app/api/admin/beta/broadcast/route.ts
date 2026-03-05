import { NextRequest, NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/adminSession';
import { createSupabaseAdminClient } from '@/lib/supabaseAdmin';
import { sendBatchEmails } from '@/lib/resend';
import { logAuditEvent } from '@/lib/auditLog';
import { rateLimit, getClientIp } from '@/lib/rateLimit';
import BroadcastUpdate from '@/emails/BroadcastUpdate';
import React from 'react';

interface BroadcastSignup {
  email: string;
  full_name: string;
}

export async function POST(request: NextRequest) {
  try {
    const isAuthed = await isAdminAuthenticated();
    if (!isAuthed) {
      return NextResponse.json(
        { ok: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Rate limit: 10 broadcasts per hour (global)
    const rl = rateLimit({ key: 'broadcast:global', limit: 10, windowMs: 60 * 60 * 1000 });
    if (!rl.success) {
      return NextResponse.json(
        { ok: false, error: 'Broadcast rate limit reached. Please wait before sending again.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { subject, messageBody, ctaText, ctaUrl, statusFilter } = body;

    if (!subject || !messageBody) {
      return NextResponse.json(
        { ok: false, error: 'Subject and message body are required' },
        { status: 400 }
      );
    }

    // Fetch recipients based on status filter
    const supabase = createSupabaseAdminClient();
    const validStatuses = statusFilter === 'approved'
      ? ['approved', 'invited']
      : statusFilter === 'pending'
        ? ['pending']
        : ['pending', 'approved', 'invited'];

    const { data: signups, error: fetchError } = await supabase
      .from('beta_signups')
      .select('email,full_name')
      .in('status', validStatuses)
      .order('created_at', { ascending: false });

    if (fetchError) {
      console.error('[broadcast] Fetch error:', fetchError.message);
      return NextResponse.json(
        { ok: false, error: 'Failed to fetch recipients' },
        { status: 500 }
      );
    }

    const recipients = (signups as unknown as BroadcastSignup[]) || [];

    if (recipients.length === 0) {
      return NextResponse.json(
        { ok: false, error: 'No recipients match the selected filter' },
        { status: 400 }
      );
    }

    // Build email batch
    const emails = recipients.map((recipient) => ({
      to: recipient.email,
      subject,
      react: React.createElement(BroadcastUpdate, {
        recipientName: recipient.full_name,
        subject,
        body: messageBody,
        ctaText: ctaText || undefined,
        ctaUrl: ctaUrl || undefined,
      }),
    }));

    // Send via Resend batch API
    const result = await sendBatchEmails(emails);

    // Audit log
    const ip = getClientIp(request);
    logAuditEvent({
      action: 'broadcast',
      details: `Subject: "${subject}" | Filter: ${statusFilter || 'all'} | Sent: ${result.sent} | Failed: ${result.failed}`,
      ip_address: ip,
    });

    return NextResponse.json({
      ok: true,
      sent: result.sent,
      failed: result.failed,
      total: recipients.length,
    });
  } catch (error) {
    console.error('[broadcast] Error:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to fetch recipient count for preview
export async function GET(request: NextRequest) {
  try {
    const isAuthed = await isAdminAuthenticated();
    if (!isAuthed) {
      return NextResponse.json(
        { ok: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const statusFilter = searchParams.get('statusFilter') || 'all';

    const supabase = createSupabaseAdminClient();
    const validStatuses = statusFilter === 'approved'
      ? ['approved', 'invited']
      : statusFilter === 'pending'
        ? ['pending']
        : ['pending', 'approved', 'invited'];

    const { data: signups, error: fetchError } = await supabase
      .from('beta_signups')
      .select('email')
      .in('status', validStatuses)
      .order('created_at', { ascending: false });

    if (fetchError) {
      return NextResponse.json(
        { ok: false, error: 'Failed to count recipients' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      count: (signups as unknown[])?.length || 0,
    });
  } catch (error) {
    console.error('[broadcast count] Error:', error);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
