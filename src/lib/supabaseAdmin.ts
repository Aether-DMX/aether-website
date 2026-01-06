type QueryResult = Promise<{ data: unknown[] | null; error: { message: string } | null }>;

interface SupabaseAdminClient {
  from: (table: string) => {
    select: (columns: string) => {
      eq: (column: string, value: string) => {
        order: (column: string, options: { ascending: boolean }) => QueryResult;
      };
      in: (column: string, values: string[]) => {
        order: (column: string, options: { ascending: boolean }) => QueryResult;
      };
      order: (column: string, options: { ascending: boolean }) => QueryResult;
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

  const executeQuery = async (url: URL): QueryResult => {
    const response = await fetch(url.toString(), { headers });
    if (!response.ok) {
      const errorText = await response.text();
      return { data: null, error: { message: errorText } };
    }
    const data = await response.json();
    return { data, error: null };
  };

  return {
    from: (table: string) => ({
      select: (columns: string) => {
        const baseUrl = new URL(`${supabaseUrl}/rest/v1/${table}`);
        baseUrl.searchParams.set('select', columns);

        return {
          eq: (column: string, value: string) => {
            baseUrl.searchParams.set(column, `eq.${value}`);
            return {
              order: async (orderColumn: string, options: { ascending: boolean }) => {
                baseUrl.searchParams.set('order', `${orderColumn}.${options.ascending ? 'asc' : 'desc'}`);
                return executeQuery(baseUrl);
              },
            };
          },
          in: (column: string, values: string[]) => {
            baseUrl.searchParams.set(column, `in.(${values.join(',')})`);
            return {
              order: async (orderColumn: string, options: { ascending: boolean }) => {
                baseUrl.searchParams.set('order', `${orderColumn}.${options.ascending ? 'asc' : 'desc'}`);
                return executeQuery(baseUrl);
              },
            };
          },
          order: async (orderColumn: string, options: { ascending: boolean }) => {
            baseUrl.searchParams.set('order', `${orderColumn}.${options.ascending ? 'asc' : 'desc'}`);
            return executeQuery(baseUrl);
          },
        };
      },
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

  console.log('[invokeBetaInviteFunction] Starting...');
  console.log('[invokeBetaInviteFunction] Has SUPABASE_URL:', !!supabaseUrl);
  console.log('[invokeBetaInviteFunction] Has AETHER_INVITE_SECRET:', !!inviteSecret);
  console.log('[invokeBetaInviteFunction] Secret length:', inviteSecret?.length || 0);
  console.log('[invokeBetaInviteFunction] Secret first 5 chars:', inviteSecret?.substring(0, 5) || 'N/A');

  if (!supabaseUrl || !inviteSecret) {
    console.error('[invokeBetaInviteFunction] Missing config!');
    throw new Error('Edge function configuration is missing');
  }

  // Derive functions URL from Supabase URL
  const functionsUrl = supabaseUrl.replace('.supabase.co', '.functions.supabase.co');
  const edgeFunctionUrl = `${functionsUrl}/send-beta-invite`;

  console.log('[invokeBetaInviteFunction] Calling:', edgeFunctionUrl);
  console.log('[invokeBetaInviteFunction] signup_id:', signupId);

  const response = await fetch(edgeFunctionUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-aether-invite-secret': inviteSecret,
    },
    body: JSON.stringify({ signup_id: signupId }),
  });

  console.log('[invokeBetaInviteFunction] Response status:', response.status);

  if (!response.ok) {
    const errorText = await response.text();
    console.error('[invokeBetaInviteFunction] Error response:', errorText);
    return { ok: false, error: `Edge function error: ${response.status} - ${errorText}` };
  }

  const result = await response.json();
  console.log('[invokeBetaInviteFunction] Success result:', JSON.stringify(result));
  return { ok: result.success !== false, error: result.error };
}
