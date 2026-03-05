import { NextRequest, NextResponse } from 'next/server';
import { rateLimit, getClientIp } from '@/lib/rateLimit';
import { createSupabaseAdminClient } from '@/lib/supabaseAdmin';
import { sendEmail } from '@/lib/resend';
import WaitlistConfirmation from '@/emails/WaitlistConfirmation';
import AdminNewSignup from '@/emails/AdminNewSignup';
import React from 'react';

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 3 signups per hour per IP
    const ip = getClientIp(request);
    const rl = rateLimit({ key: `signup:${ip}`, limit: 3, windowMs: 60 * 60 * 1000 });

    if (!rl.success) {
      return NextResponse.json(
        { success: false, error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate required fields
    const { email, full_name, role, experience_level } = body;

    if (!email || !full_name || !role || !experience_level) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const supabase = createSupabaseAdminClient();

    const { error: insertError } = await supabase
      .from('beta_signups')
      .insert({
        email: email.toLowerCase().trim(),
        full_name: full_name.trim(),
        company: body.company || null,
        role: role,
        venue_type: body.venue_type || null,
        current_system: body.current_system || null,
        experience_level: experience_level,
        interest_reason: body.interest_reason || null,
        how_heard: body.how_heard || null,
        wants_hardware: body.wants_hardware || false,
        newsletter_opt_in: body.newsletter_opt_in ?? true,
        utm_source: body.utm_source || null,
        utm_medium: body.utm_medium || null,
        utm_campaign: body.utm_campaign || null,
        referrer: body.referrer || null,
        status: 'pending',
      });

    if (insertError) {
      console.error('[beta/signup] Insert error:', insertError.message);

      // Check for duplicate email
      if (insertError.message.includes('duplicate') || insertError.message.includes('unique')) {
        return NextResponse.json(
          { success: false, error: 'This email is already on the waitlist.' },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { success: false, error: 'Failed to save signup. Please try again.' },
        { status: 500 }
      );
    }

    // Send waitlist confirmation email (fire-and-forget)
    sendEmail({
      to: email.toLowerCase().trim(),
      subject: "You're on the Aether DMX waitlist!",
      react: React.createElement(WaitlistConfirmation, { fullName: full_name.trim() }),
    }).catch((err) => {
      console.error('[beta/signup] Confirmation email error:', err);
    });

    // Send admin notification email (fire-and-forget)
    // Supports comma-separated list of emails in ADMIN_NOTIFICATION_EMAIL
    const adminEmailRaw = process.env.ADMIN_NOTIFICATION_EMAIL;
    if (adminEmailRaw) {
      const adminEmails = adminEmailRaw.split(',').map((e) => e.trim()).filter(Boolean);
      if (adminEmails.length > 0) {
        sendEmail({
          to: adminEmails,
          subject: `New beta signup: ${full_name.trim()}`,
          react: React.createElement(AdminNewSignup, {
            fullName: full_name.trim(),
            email: email.toLowerCase().trim(),
            role: role,
            company: body.company || null,
            experienceLevel: experience_level,
            currentSystem: body.current_system || null,
            interestReason: body.interest_reason || null,
            howHeard: body.how_heard || null,
          }),
        }).catch((err) => {
          console.error('[beta/signup] Admin notification error:', err);
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[beta/signup] Unexpected error:', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
