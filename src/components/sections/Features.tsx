'use client';

const features = [
  {
    title: 'Talk to Your Lights',
    description: 'Describe the look you want in plain English — or say it out loud. The AI generates professional scenes, chases, and shows automatically.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    gradient: 'from-[#00d4ff] to-[#0099cc]',
  },
  {
    title: 'Control From Any Screen',
    description: 'AETHER serves a web app on its own dedicated network. Use a dedicated touchscreen, tablet, phone, or laptop — no special software to install.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    gradient: 'from-[#a855f7] to-[#7c3aed]',
  },
  {
    title: 'DMX Nodes — Wired or Wireless',
    description: 'Place DMX nodes anywhere in your venue — connect them wirelessly or via Ethernet. Each outputs up to 2 universes. If the connection drops, nodes keep playing — your lights never go dark.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    gradient: 'from-[#f59e0b] to-[#d97706]',
  },
  {
    title: 'Offline by Default',
    description: 'AETHER runs on its own dedicated network — completely separate from your venue WiFi. No cloud dependency, no internet required for show control. AI features optionally use the internet.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    gradient: 'from-[#10b981] to-[#059669]',
  },
  {
    title: 'Scale As You Grow',
    description: 'Start with one node and expand as your venue grows. Add nodes anytime — they connect automatically. No universe limit.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    gradient: 'from-[#6366f1] to-[#4f46e5]',
  },
  {
    title: 'Dedicated Kiosk Mode',
    description: 'Pair a Raspberry Pi with a touchscreen and it becomes a dedicated lighting console. Boots straight into AETHER — no desktop, no distractions.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    gradient: 'from-[#00d4ff] to-[#a855f7]',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What Makes Aether <span className="gradient-text">Different</span>
          </h2>
          <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
            Professional DMX control built for real venues by people who run them.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-[#111114] border border-[#1f1f24] rounded-xl p-6 card-hover"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 text-white`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00d4ff] transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-[#71717a] leading-relaxed">
                {feature.description}
              </p>

              {/* Hover gradient border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00d4ff]/0 via-transparent to-[#a855f7]/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                   style={{ padding: '1px', background: 'linear-gradient(135deg, rgba(0,212,255,0.3), transparent, rgba(168,85,247,0.3))', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
