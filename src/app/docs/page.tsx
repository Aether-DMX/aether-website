import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Documentation | Aether DMX',
  description: 'Documentation and knowledge base for Aether DMX. Getting started guides, hardware setup, patching, AI features, and troubleshooting.',
  keywords: ['DMX documentation', 'lighting control docs', 'Aether DMX guide', 'DMX setup guide'],
};

const plannedSections = [
  {
    title: 'Getting Started',
    description: 'Quick start guide for new users. System requirements, first-time setup, and basic concepts.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    status: 'In Progress',
  },
  {
    title: 'Installation',
    description: 'Step-by-step installation instructions for Aether Core on Raspberry Pi and other platforms.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    status: 'In Progress',
  },
  {
    title: 'Hardware Setup',
    description: 'DMX node assembly, wiring diagrams, firmware flashing, and network configuration.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    status: 'Planned',
  },
  {
    title: 'Patching & Fixtures',
    description: 'How to patch fixtures, manage universes, import fixture profiles, and organize your show.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    status: 'Planned',
  },
  {
    title: 'AI Features',
    description: 'Using the AI Scene Builder, natural language commands, and cloud AI capabilities.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    status: 'Planned',
  },
  {
    title: 'Troubleshooting',
    description: 'Common issues, diagnostic tools, error codes, and how to get help.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    status: 'Planned',
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-[#71717a] hover:text-white mb-6 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              <span className="gradient-text">Documentation</span>
            </h1>
            <p className="text-xl text-[#71717a] leading-relaxed">
              Comprehensive guides and references for Aether DMX. 
              We&apos;re actively building documentation as we develop the platform.
            </p>
          </div>
        </div>
      </section>

      {/* Status Banner */}
      <section className="py-8 bg-[#111114] border-y border-[#1f1f24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 p-4 bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-lg">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#00d4ff]/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00d4ff]"></span>
              </span>
            </div>
            <div>
              <h3 className="text-[#00d4ff] font-semibold">Documentation in Active Development</h3>
              <p className="text-sm text-[#71717a]">
                We&apos;re building comprehensive documentation alongside the product. 
                Beta users get early access and can contribute feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planned Sections */}
      <section className="py-16 lg:py-24 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Planned Documentation</h2>
          <p className="text-[#71717a] mb-8 max-w-2xl">
            Here&apos;s what we&apos;re working on. Beta users will have early access to 
            documentation as it becomes available.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plannedSections.map((section) => (
              <div
                key={section.title}
                className="bg-[#111114] border border-[#1f1f24] rounded-xl p-6 opacity-80"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1f1f24] flex items-center justify-center text-[#71717a]">
                    {section.icon}
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    section.status === 'In Progress'
                      ? 'bg-[#00d4ff]/20 text-[#00d4ff]'
                      : 'bg-[#1f1f24] text-[#71717a]'
                  }`}>
                    {section.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{section.title}</h3>
                <p className="text-sm text-[#71717a]">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Help */}
      <section className="py-16 lg:py-24 bg-[#111114]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Discord */}
            <div className="bg-[#0a0a0c] border border-[#1f1f24] rounded-xl p-8">
              <div className="w-14 h-14 rounded-xl bg-[#5865F2]/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Join Our Discord</h3>
              <p className="text-[#71717a] mb-6">
                Get real-time help from the community and development team. 
                Share your setups, ask questions, and connect with other lighting professionals.
              </p>
              <a
                href="https://discord.gg/aetherdmx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-secondary"
              >
                Join Discord Server
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Email Support */}
            <div className="bg-[#0a0a0c] border border-[#1f1f24] rounded-xl p-8">
              <div className="w-14 h-14 rounded-xl bg-[#00d4ff]/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
              <p className="text-[#71717a] mb-6">
                For beta-related inquiries, technical issues, or partnership discussions, 
                reach out directly to our team.
              </p>
              <a
                href="mailto:support@aetherdmx.com"
                className="inline-flex items-center gap-2 btn-secondary"
              >
                support@aetherdmx.com
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#0a0a0c] border-t border-[#1f1f24]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Want Early Access to Docs?</h2>
          <p className="text-[#71717a] mb-8">
            Beta users get access to documentation as we write it, plus the ability 
            to suggest topics and provide feedback.
          </p>
          <Link href="/#beta" className="btn-primary inline-block">
            Apply for Private Beta
          </Link>
        </div>
      </section>
    </div>
  );
}
