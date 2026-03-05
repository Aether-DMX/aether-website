import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[#0a0a0c]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#00d4ff]/5 to-transparent rounded-full" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-[#111114] border border-[#1f1f24] rounded-full px-4 py-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]"></span>
          </span>
          <span className="text-sm text-[#a1a1aa]">Private Beta &mdash; Now Open</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Professional Lighting Control.{' '}
          <span className="gradient-text">Radically Simplified.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#71717a] max-w-3xl mx-auto mb-10 leading-relaxed">
          AI-powered DMX control that runs on off-the-shelf hardware. Talk to your lights in plain
          English and control them from any screen.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="#beta"
            className="btn-primary text-base px-8 py-4 w-full sm:w-auto"
          >
            Apply for the Beta
          </Link>
          <Link
            href="#features"
            className="btn-secondary text-base px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            See How It Works
          </Link>
        </div>

        {/* Hero Visual Placeholder */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative bg-[#111114] border border-[#1f1f24] rounded-2xl overflow-hidden shadow-2xl">
            {/* Fake browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0a0c] border-b border-[#1f1f24]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-[#1f1f24] rounded-md px-4 py-1 text-xs text-[#71717a] flex items-center gap-2">
                  <svg className="w-3 h-3 text-[#22c55e]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="6" />
                  </svg>
                  Aether DMX
                </div>
              </div>
            </div>

            {/* UI Mockup */}
            <div className="aspect-video bg-gradient-to-br from-[#0a0a0c] to-[#111114] p-6">
              <div className="h-full flex gap-4">
                {/* Sidebar */}
                <div className="w-16 bg-[#0a0a0c] rounded-lg flex flex-col items-center py-4 gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#a855f7]" />
                  <div className="w-8 h-8 rounded-lg bg-[#1f1f24]" />
                  <div className="w-8 h-8 rounded-lg bg-[#1f1f24]" />
                  <div className="w-8 h-8 rounded-lg bg-[#1f1f24]" />
                </div>

                {/* Main content */}
                <div className="flex-1 flex flex-col gap-4">
                  {/* Top bar */}
                  <div className="flex gap-4">
                    <div className="flex-1 h-10 bg-[#0a0a0c] rounded-lg" />
                    <div className="w-32 h-10 bg-[#00d4ff]/20 border border-[#00d4ff]/30 rounded-lg flex items-center justify-center text-xs text-[#00d4ff]">
                      Live
                    </div>
                  </div>

                  {/* Content grid */}
                  <div className="flex-1 grid grid-cols-3 gap-4">
                    <div className="col-span-2 bg-[#0a0a0c] rounded-lg p-4">
                      <div className="text-xs text-[#71717a] mb-2">Universe 1 — Main Stage</div>
                      <div className="grid grid-cols-8 gap-1">
                        {Array.from({ length: 32 }).map((_, i) => (
                          <div
                            key={i}
                            className="aspect-square rounded"
                            style={{
                              backgroundColor: i < 12 ? `hsl(${180 + i * 5}, 80%, ${40 + Math.random() * 20}%)` : '#1f1f24'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="bg-[#0a0a0c] rounded-lg p-4">
                      <div className="text-xs text-[#71717a] mb-2">AI Scene Builder</div>
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-[#1f1f24] rounded" />
                        <div className="h-3 w-4/5 bg-[#1f1f24] rounded" />
                        <div className="h-3 w-3/5 bg-[#1f1f24] rounded" />
                        <div className="mt-4 h-8 bg-gradient-to-r from-[#00d4ff]/20 to-[#a855f7]/20 border border-[#00d4ff]/30 rounded flex items-center justify-center text-xs text-[#00d4ff]">
                          Generate Scene
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect under the mockup */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-gradient-to-r from-[#00d4ff]/20 via-[#a855f7]/20 to-[#00d4ff]/20 blur-3xl" />
        </div>

        {/* Trust indicators */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">Unlimited</div>
            <div className="text-xs text-[#71717a] mt-1">DMX Universes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">Wired + Wireless</div>
            <div className="text-xs text-[#71717a] mt-1">DMX Output</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">Dedicated</div>
            <div className="text-xs text-[#71717a] mt-1">Private Network</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-xs text-[#71717a] mt-1">Offline Capable</div>
          </div>
        </div>
      </div>
    </section>
  );
}
