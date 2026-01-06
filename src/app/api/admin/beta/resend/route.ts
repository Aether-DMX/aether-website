import { NextRequest, NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/adminSession';
import { invokeBetaInviteFunction } from '@/lib/supabaseAdmin';

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
    const { signup_id } = body;

    if (!signup_id) {
      return NextResponse.json(
        { ok: false, error: 'signup_id is required' },
        { status: 400 }
      );
    }

    // Invoke edge function to resend invite (no status change needed)
    const invokeResult = await invokeBetaInviteFunction(signup_id);

    if (!invokeResult.ok) {
      console.error('Edge function error:', invokeResult.error);
      return NextResponse.json(
        {
          ok: false,
          error: invokeResult.error || 'Failed to resend invite email',
          debug: {
            hasSecret: !!process.env.AETHER_INVITE_SECRET,
            secretLength: process.env.AETHER_INVITE_SECRET?.length || 0,
            secretPrefix: process.env.AETHER_INVITE_SECRET?.substring(0, 10) || 'N/A',
            hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL
          }
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Resend error:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
