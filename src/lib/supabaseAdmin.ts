interface SupabaseAdminClient {
  from: (table: string) => {
    select: (columns: string) => {
      eq: (column: string, value: string) => {
        order: (column: string, options: { ascending: boolean }) => Promise<{ data: unknown[] | null; error: { message: string } | null }>;
      };
    };
    update: (data: Record<string, unknown>) => {
      eq: (column: string, value: string) => Promise<{ data: unknown | null; error: { message: string } | null }>;
    };
  };
}

export function createSupabaseAdminClient(): SupabaseAdminClient {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error('Supabase configuration is missing');
  }

  const headers = {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
    'Content-Type': 'application/json',
    Prefer: 'return=representation',
  };

  return {
    from: (table: string) => ({
      select: (columns: string) => ({
        eq: (column: string, value: string) => ({
          order: async (orderColumn: string, options: { ascending: boolean }) => {
            const url = new URL(`${supabaseUrl}/rest/v1/${table}`);
            url.searchParams.set('select', columns);
            url.searchParams.set(column, `eq.${value}`);
            url.searchParams.set('order', `${orderColumn}.${options.ascending ? 'asc' : 'desc'}`);

            const response = await fetch(url.toString(), { headers });
            if (!response.ok) {
              const errorText = await response.text();
              return { data: null, error: { message: errorText } };
            }
            const data = await response.json();
            return { data, error: null };
          },
        }),
      }),
      update: (updateData: Record<string, unknown>) => ({
        eq: async (column: string, value: string) => {
          const url = new URL(`${supabaseUrl}/rest/v1/${table}`);
          url.searchParams.set(column, `eq.${value}`);

          const response = await fetch(url.toString(), {
            method: 'PATCH',
            headers,
            body: JSON.stringify(updateData),
          });
          if (!response.ok) {
            const errorText = await response.text();
            return { data: null, error: { message: errorText } };
          }
          const data = await response.json();
          return { data, error: null };
        },
      }),
    }),
  };
}

export async function invokeBetaInviteFunction(signupId: string): Promise<{ ok: boolean; error?: string }> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const inviteSecret = process.env.AETHER_INVITE_SECRET;

  if (!supabaseUrl || !inviteSecret) {
    throw new Error('Edge function configuration is missing');
  }

  // Derive functions URL from Supabase URL
  const functionsUrl = supabaseUrl.replace('.supabase.co', '.functions.supabase.co');
  const edgeFunctionUrl = `${functionsUrl}/send-beta-invite`;

  const response = await fetch(edgeFunctionUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-aether-invite-secret': inviteSecret,
    },
    body: JSON.stringify({ signup_id: signupId }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return { ok: false, error: `Edge function error: ${response.status}` };
  }

  const result = await response.json();
  return { ok: result.success !== false, error: result.error };
}
