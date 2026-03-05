export interface AuditEvent {
  action: 'login' | 'approve' | 'resend_invite' | 'broadcast' | 'logout';
  target_email?: string;
  target_signup_id?: string;
  details?: string;
  ip_address?: string;
}

/**
 * Fire-and-forget audit logging to Supabase.
 * Errors are caught silently — audit logging should never block operations.
 */
export function logAuditEvent(event: AuditEvent): void {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    console.warn('[auditLog] Supabase config missing — skipping audit log');
    return;
  }

  // Fire-and-forget — intentionally not awaited
  fetch(`${supabaseUrl}/rest/v1/admin_audit_log`, {
    method: 'POST',
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      action: event.action,
      target_email: event.target_email || null,
      target_signup_id: event.target_signup_id || null,
      details: event.details || null,
      ip_address: event.ip_address || null,
    }),
  }).catch((err) => {
    console.error('[auditLog] Failed to write audit event:', err);
  });
}
