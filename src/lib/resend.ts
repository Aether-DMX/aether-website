import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Aether DMX <beta@aetherdmx.com>';

interface SendEmailOptions {
  to: string | string[];
  subject: string;
  react: React.ReactElement;
  replyTo?: string;
}

interface SendEmailResult {
  success: boolean;
  id?: string;
  error?: string;
}

export async function sendEmail(options: SendEmailOptions): Promise<SendEmailResult> {
  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: options.to,
      subject: options.subject,
      react: options.react,
      replyTo: options.replyTo,
    });

    if (error) {
      console.error('[sendEmail] Resend error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, id: data?.id };
  } catch (err) {
    console.error('[sendEmail] Unexpected error:', err);
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Unknown email error',
    };
  }
}

export async function sendBatchEmails(
  emails: Array<{
    to: string;
    subject: string;
    react: React.ReactElement;
  }>
): Promise<{ success: boolean; sent: number; failed: number }> {
  let sent = 0;
  let failed = 0;

  // Resend batch API supports up to 100 emails at a time
  const batchSize = 100;

  for (let i = 0; i < emails.length; i += batchSize) {
    const batch = emails.slice(i, i + batchSize);

    try {
      const { error } = await resend.batch.send(
        batch.map((email) => ({
          from: FROM_EMAIL,
          to: email.to,
          subject: email.subject,
          react: email.react,
        }))
      );

      if (error) {
        console.error(`[sendBatchEmails] Batch ${i / batchSize + 1} error:`, error);
        failed += batch.length;
      } else {
        sent += batch.length;
      }
    } catch (err) {
      console.error(`[sendBatchEmails] Batch ${i / batchSize + 1} exception:`, err);
      failed += batch.length;
    }
  }

  return { success: failed === 0, sent, failed };
}

export { resend };
