import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/adminSession';
import { createSupabaseAdminClient } from '@/lib/supabaseAdmin';

export async function GET() {
  try {
    const isAuthed = await isAdminAuthenticated();
    if (!isAuthed) {
      return NextResponse.json(
        { ok: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from('beta_signups')
      .select('signup_id,email,full_name,company,role,venue_type,current_system,experience_level,created_at,interest_reason')
      .eq('status', 'pending')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error.message);
      return NextResponse.json(
        { ok: false, error: 'Failed to fetch signups' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, signups: data || [] });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('List error:', errorMessage);
    return NextResponse.json(
      { ok: false, error: errorMessage },
      { status: 500 }
    );
  }
}
