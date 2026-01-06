import { NextRequest, NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/adminSession';
import { createSupabaseAdminClient, invokeBetaInviteFunction } from '@/lib/supabaseAdmin';

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

    // Invoke edge function to send invite
    const invokeResult = await invokeBetaInviteFunction(signup_id);

    if (!invokeResult.ok) {
      console.error('Edge function error:', invokeResult.error);
      return NextResponse.json(
        { ok: false, error: 'Approval saved but invite email failed to send' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Approve error:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
