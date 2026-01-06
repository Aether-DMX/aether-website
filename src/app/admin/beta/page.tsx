'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface BetaSignup {
  signup_id: string;
  email: string;
  full_name: string;
  company: string | null;
  role: string;
  venue_type: string | null;
  current_system: string | null;
  experience_level: string;
  created_at: string;
  interest_reason: string | null;
  status: string;
}

type TabType = 'pending' | 'approved';

export default function AdminBetaPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('pending');
  const [signups, setSignups] = useState<BetaSignup[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [approvingIds, setApprovingIds] = useState<Set<string>>(new Set());
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const fetchSignups = useCallback(async (tab: TabType) => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/admin/beta/list?status=${tab}`);
      const data = await response.json();

      if (response.status === 401) {
        router.push('/admin/login');
        return;
      }

      if (data.ok) {
        setSignups(data.signups);
      } else {
        setError(data.error || 'Failed to load signups');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchSignups(activeTab);
  }, [activeTab, fetchSignups]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleApprove = async (signupId: string, email: string) => {
    setApprovingIds((prev) => new Set(prev).add(signupId));

    try {
      const response = await fetch('/api/admin/beta/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ signup_id: signupId }),
      });

      const data = await response.json();

      if (response.status === 401) {
        router.push('/admin/login');
        return;
      }

      if (data.ok) {
        setSignups((prev) => prev.filter((s) => s.signup_id !== signupId));
        setToast({ message: `Invite sent to ${email}`, type: 'success' });
      } else {
        setToast({ message: data.error || 'Failed to approve', type: 'error' });
      }
    } catch {
      setToast({ message: 'Network error', type: 'error' });
    } finally {
      setApprovingIds((prev) => {
        const next = new Set(prev);
        next.delete(signupId);
        return next;
      });
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'invited':
        return <span className="px-2 py-0.5 text-xs rounded bg-green-500/20 text-green-400">Invited</span>;
      case 'approved':
        return <span className="px-2 py-0.5 text-xs rounded bg-yellow-500/20 text-yellow-400">Approved</span>;
      default:
        return <span className="px-2 py-0.5 text-xs rounded bg-[#71717a]/20 text-[#71717a]">Pending</span>;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] pt-24 pb-16">
      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-20 right-4 z-50 px-4 py-3 rounded-lg shadow-lg ${
            toast.type === 'success'
              ? 'bg-green-500/20 border border-green-500/50 text-green-400'
              : 'bg-red-500/20 border border-red-500/50 text-red-400'
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Beta Approvals</h1>
            <p className="text-[#71717a] text-sm mt-1">
              Review and manage beta signups
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="text-[#71717a] hover:text-white transition-colors text-sm flex items-center gap-2 bg-[#111114] border border-[#1f1f24] rounded-lg px-4 py-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              activeTab === 'pending'
                ? 'bg-[#00d4ff] text-black'
                : 'bg-[#111114] border border-[#1f1f24] text-[#71717a] hover:text-white'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setActiveTab('approved')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              activeTab === 'approved'
                ? 'bg-[#00d4ff] text-black'
                : 'bg-[#111114] border border-[#1f1f24] text-[#71717a] hover:text-white'
            }`}
          >
            Approved / Invited
          </button>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <svg className="animate-spin w-8 h-8 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
        ) : error ? (
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg px-4 py-3 text-red-400">
            {error}
          </div>
        ) : signups.length === 0 ? (
          <div className="bg-[#111114] border border-[#1f1f24] rounded-xl p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[#1f1f24] flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#71717a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {activeTab === 'pending' ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                )}
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">
              {activeTab === 'pending' ? 'No pending signups' : 'No approved signups yet'}
            </h3>
            <p className="text-[#71717a] text-sm">
              {activeTab === 'pending'
                ? 'All beta signups have been processed.'
                : 'Approved users will appear here for reference.'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {signups.map((signup) => (
              <div
                key={signup.signup_id}
                className="bg-[#111114] border border-[#1f1f24] rounded-xl p-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-white font-semibold truncate">{signup.full_name}</h3>
                      <span className="px-2 py-0.5 text-xs rounded bg-[#00d4ff]/20 text-[#00d4ff] whitespace-nowrap">
                        {signup.role}
                      </span>
                      {activeTab === 'approved' && getStatusBadge(signup.status)}
                    </div>
                    <p className="text-[#71717a] text-sm mb-3">{signup.email}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
                      {signup.company && (
                        <div>
                          <span className="text-[#71717a]">Company: </span>
                          <span className="text-white">{signup.company}</span>
                        </div>
                      )}
                      {signup.current_system && (
                        <div>
                          <span className="text-[#71717a]">Current System: </span>
                          <span className="text-white">{signup.current_system}</span>
                        </div>
                      )}
                      <div>
                        <span className="text-[#71717a]">Experience: </span>
                        <span className="text-white">{signup.experience_level}</span>
                      </div>
                      <div>
                        <span className="text-[#71717a]">Signed up: </span>
                        <span className="text-white">{formatDate(signup.created_at)}</span>
                      </div>
                    </div>

                    {signup.interest_reason && (
                      <div className="mt-3 p-3 bg-[#0a0a0c] rounded-lg">
                        <p className="text-[#71717a] text-xs mb-1">Interest / Goals:</p>
                        <p className="text-white text-sm">{signup.interest_reason}</p>
                      </div>
                    )}
                  </div>

                  {activeTab === 'pending' && (
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => handleApprove(signup.signup_id, signup.email)}
                        disabled={approvingIds.has(signup.signup_id)}
                        className="w-full lg:w-auto bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-black font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {approvingIds.has(signup.signup_id) ? (
                          <>
                            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Approve + Send Invite
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats */}
        {!isLoading && !error && signups.length > 0 && (
          <div className="mt-8 text-center text-[#71717a] text-sm">
            {signups.length} {activeTab === 'pending' ? 'pending' : 'approved'} signup{signups.length !== 1 ? 's' : ''}
          </div>
        )}
      </div>
    </div>
  );
}
