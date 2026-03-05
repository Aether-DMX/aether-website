'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type StatusFilter = 'all' | 'pending' | 'approved';

export default function AdminBroadcastsPage() {
  const router = useRouter();
  const [subject, setSubject] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [ctaText, setCtaText] = useState('');
  const [ctaUrl, setCtaUrl] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [recipientCount, setRecipientCount] = useState<number | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const fetchRecipientCount = useCallback(async (filter: StatusFilter) => {
    try {
      const response = await fetch(`/api/admin/beta/broadcast?statusFilter=${filter}`);
      if (response.status === 401) {
        router.push('/admin/login');
        return;
      }
      const data = await response.json();
      if (data.ok) {
        setRecipientCount(data.count);
      }
    } catch {
      setRecipientCount(null);
    }
  }, [router]);

  useEffect(() => {
    fetchRecipientCount(statusFilter);
  }, [statusFilter, fetchRecipientCount]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleSend = async () => {
    setShowConfirm(false);
    setIsSending(true);

    try {
      const response = await fetch('/api/admin/beta/broadcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject,
          messageBody,
          ctaText: ctaText || undefined,
          ctaUrl: ctaUrl || undefined,
          statusFilter,
        }),
      });

      if (response.status === 401) {
        router.push('/admin/login');
        return;
      }

      const data = await response.json();

      if (data.ok) {
        setToast({
          message: `Broadcast sent to ${data.sent} recipient${data.sent !== 1 ? 's' : ''}${data.failed > 0 ? ` (${data.failed} failed)` : ''}`,
          type: data.failed > 0 ? 'error' : 'success',
        });
        // Clear form on success
        setSubject('');
        setMessageBody('');
        setCtaText('');
        setCtaUrl('');
      } else {
        setToast({ message: data.error || 'Failed to send broadcast', type: 'error' });
      }
    } catch {
      setToast({ message: 'Network error', type: 'error' });
    } finally {
      setIsSending(false);
    }
  };

  const canSend = subject.trim() && messageBody.trim() && recipientCount && recipientCount > 0;

  return (
    <div className="min-h-screen bg-[#0a0a0c] pt-24 pb-16">
      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-20 right-4 z-50 px-4 py-3 rounded-lg shadow-lg max-w-sm ${
            toast.type === 'success'
              ? 'bg-green-500/20 border border-green-500/50 text-green-400'
              : 'bg-red-500/20 border border-red-500/50 text-red-400'
          }`}
        >
          {toast.message}
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-[#111114] border border-[#1f1f24] rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-white mb-2">Confirm Broadcast</h3>
            <p className="text-[#71717a] text-sm mb-1">
              You&apos;re about to send an email to:
            </p>
            <p className="text-white font-semibold text-lg mb-4">
              {recipientCount} recipient{recipientCount !== 1 ? 's' : ''}
            </p>
            <p className="text-[#71717a] text-sm mb-6">
              Subject: <span className="text-white">&ldquo;{subject}&rdquo;</span>
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 bg-[#1f1f24] text-white py-2 px-4 rounded-lg hover:bg-[#2a2a30] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSend}
                className="flex-1 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-black font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Now
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Send Broadcast</h1>
            <p className="text-[#71717a] text-sm mt-1">
              Compose and send email updates to beta signups
            </p>
          </div>
          <Link
            href="/admin/beta"
            className="text-[#71717a] hover:text-white transition-colors text-sm flex items-center gap-2 bg-[#111114] border border-[#1f1f24] rounded-lg px-4 py-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Beta Approvals
          </Link>
        </div>

        {/* Compose Form */}
        <div className="bg-[#111114] border border-[#1f1f24] rounded-xl p-6 space-y-6">
          {/* Audience Filter */}
          <div>
            <label htmlFor="audience" className="block text-sm font-medium text-white mb-2">
              Audience
            </label>
            <select
              id="audience"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
              className="w-full bg-[#0a0a0c] border border-[#1f1f24] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition-all"
            >
              <option value="all">All Signups</option>
              <option value="pending">Pending Only</option>
              <option value="approved">Approved / Invited Only</option>
            </select>
            {recipientCount !== null && (
              <p className="mt-2 text-sm text-[#71717a]">
                <span className="text-[#00d4ff] font-semibold">{recipientCount}</span>{' '}
                recipient{recipientCount !== 1 ? 's' : ''} will receive this email
              </p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
              Subject Line <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-[#0a0a0c] border border-[#1f1f24] rounded-lg px-4 py-3 text-white placeholder-[#71717a] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition-all"
              placeholder="e.g., Aether DMX Beta Update — March 2026"
            />
          </div>

          {/* Message Body */}
          <div>
            <label htmlFor="body" className="block text-sm font-medium text-white mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="body"
              value={messageBody}
              onChange={(e) => setMessageBody(e.target.value)}
              rows={10}
              className="w-full bg-[#0a0a0c] border border-[#1f1f24] rounded-lg px-4 py-3 text-white placeholder-[#71717a] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition-all resize-none font-mono text-sm"
              placeholder={"Write your update here...\n\nUse double line breaks to create paragraphs.\nEach recipient will be greeted by their first name automatically."}
            />
            <p className="mt-1 text-xs text-[#71717a]">
              Plain text — double line breaks create paragraphs. Recipients are greeted by first name automatically.
            </p>
          </div>

          {/* Optional CTA Button */}
          <div className="border border-[#1f1f24] rounded-lg p-4">
            <p className="text-sm font-medium text-white mb-3">
              Call-to-Action Button <span className="text-[#71717a] font-normal">(optional)</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="ctaText" className="block text-xs text-[#71717a] mb-1">Button Text</label>
                <input
                  type="text"
                  id="ctaText"
                  value={ctaText}
                  onChange={(e) => setCtaText(e.target.value)}
                  className="w-full bg-[#0a0a0c] border border-[#1f1f24] rounded-lg px-3 py-2 text-white text-sm placeholder-[#71717a] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition-all"
                  placeholder="e.g., View Update"
                />
              </div>
              <div>
                <label htmlFor="ctaUrl" className="block text-xs text-[#71717a] mb-1">Button URL</label>
                <input
                  type="url"
                  id="ctaUrl"
                  value={ctaUrl}
                  onChange={(e) => setCtaUrl(e.target.value)}
                  className="w-full bg-[#0a0a0c] border border-[#1f1f24] rounded-lg px-3 py-2 text-white text-sm placeholder-[#71717a] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition-all"
                  placeholder="https://aetherdmx.com/..."
                />
              </div>
            </div>
          </div>

          {/* Send Button */}
          <button
            onClick={() => setShowConfirm(true)}
            disabled={!canSend || isSending}
            className="w-full bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-black font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSending ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Broadcast
              </>
            )}
          </button>
        </div>

        {/* Tips */}
        <div className="mt-6 bg-[#111114] border border-[#1f1f24] rounded-xl p-6">
          <h3 className="text-sm font-semibold text-white mb-3">Tips</h3>
          <ul className="space-y-2 text-sm text-[#71717a]">
            <li className="flex items-start gap-2">
              <span className="text-[#00d4ff] mt-0.5">•</span>
              Each email is personalized with the recipient&apos;s first name automatically.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00d4ff] mt-0.5">•</span>
              Emails are sent via Resend in batches of 100. Large audiences may take a moment.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00d4ff] mt-0.5">•</span>
              All broadcasts are logged in the audit trail for accountability.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00d4ff] mt-0.5">•</span>
              Rate limited to 10 broadcasts per hour to prevent accidental spam.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
