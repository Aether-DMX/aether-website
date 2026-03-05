type QueryResult = Promise<{ data: unknown[] | null; error: { message: string } | null }>;
type MutationResult = Promise<{ data: unknown | null; error: { message: string } | null }>;

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
      eq: (column: string, value: string) => MutationResult;
    };
    insert: (data: Record<string, unknown>) => MutationResult;
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
      insert: async (insertData: Record<string, unknown>): MutationResult => {
        const url = new URL(`${supabaseUrl}/rest/v1/${table}`);

        const response = await fetch(url.toString(), {
          method: 'POST',
          headers,
          body: JSON.stringify(insertData),
        });
        if (!response.ok) {
          const errorText = await response.text();
          return { data: null, error: { message: errorText } };
        }
        const data = await response.json();
        return { data, error: null };
      },
    }),
  };
}
