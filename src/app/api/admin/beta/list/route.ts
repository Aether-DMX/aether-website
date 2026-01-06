import { NextRequest, NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/adminSession';
import { createSupabaseAdminClient } from '@/lib/supabaseAdmin';

export async function GET(request: NextRequest) {
  try {
    // Check auth
    let isAuthed = false;
    try {
      isAuthed = await isAdminAuthenticated();
    } catch (authError) {
      const msg = authError instanceof Error ? authError.message : 'Auth error';
      return NextResponse.json({ ok: false, error: `Auth check failed: ${msg}` }, { status: 500 });
    }

    if (!isAuthed) {
      return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
    }

    // Get status filter from query params
    const { searchParams } = new URL(request.url);
    const statusFilter = searchParams.get('status') || 'pending';

    // Create Supabase client
    let supabase;
    try {
      supabase = createSupabaseAdminClient();
    } catch (clientError) {
      const msg = clientError instanceof Error ? clientError.message : 'Client error';
      return NextResponse.json({ ok: false, error: `Supabase client failed: ${msg}` }, { status: 500 });
    }

    // Query based on status filter
    const columns = 'signup_id,email,full_name,company,role,venue_type,current_system,experience_level,created_at,interest_reason,status';

    let data, error;
    if (statusFilter === 'approved') {
      // Get approved and invited statuses
      ({ data, error } = await supabase
        .from('beta_signups')
        .select(columns)
        .in('status', ['approved', 'invited'])
        .order('created_at', { ascending: false }));
    } else {
      // Get pending
      ({ data, error } = await supabase
        .from('beta_signups')
        .select(columns)
        .eq('status', 'pending')
        .order('created_at', { ascending: false }));
    }

    if (error) {
      return NextResponse.json({ ok: false, error: `Query failed: ${error.message}` }, { status: 500 });
    }

    return NextResponse.json({ ok: true, signups: data || [] });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ ok: false, error: `Unexpected: ${errorMessage}` }, { status: 500 });
  }
}
