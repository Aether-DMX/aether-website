'use client';

const audiences = [
  {
    title: 'Churches',
    description: 'Simplify weekly programming and let volunteers run the lights with confidence. AI handles the complexity so your team can focus on the service.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    highlights: ['Volunteer-friendly interface', 'AI scene suggestions', 'Scheduled lighting automation'],
    gradient: 'from-[#a855f7] to-[#7c3aed]',
  },
  {
    title: 'Theaters',
    description: 'Full cue stacks, crossfades, and multi-universe control. Everything you need for a production, running on hardware you already understand.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
      </svg>
    ),
    highlights: ['Full cue stack support', 'Multi-universe control', 'Moving head support'],
    gradient: 'from-[#00d4ff] to-[#0099cc]',
  },
  {
    title: 'Venues & Events',
    description: 'Reliable scheduled lighting that just works. Set it and forget it, or control live from any device. Perfect for restaurants, bars, and event spaces.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    highlights: ['Time-based scheduling', 'Remote access from any device', 'Works offline'],
    gradient: 'from-[#f59e0b] to-[#d97706]',
  },
  {
    title: 'DIY Builders',
    description: 'Own your system completely. Open hardware designs, no vendor lock-in, and a community of builders to learn from. Your lights, your rules.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-5.1m0 0L11.42 5m-5.1 5.07h13.26" />
      </svg>
    ),
    highlights: ['Open hardware spec', 'Build your own nodes', 'Active community'],
    gradient: 'from-[#10b981] to-[#059669]',
  },
];

export default function Testimonials() {
  return (
    <section id="built-for" className="py-24 lg:py-32 bg-[#111114]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Built <span className="gradient-text">For</span>
          </h2>
          <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
            Whether you&apos;re running a weekly service, staging a production, or building
            your dream setup — AETHER is designed for you.
          </p>
        </div>

        {/* Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="bg-[#0a0a0c] border border-[#1f1f24] rounded-xl p-6 sm:p-8 card-hover"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center mb-5 text-white`}>
                {audience.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">{audience.title}</h3>

              {/* Description */}
              <p className="text-[#71717a] mb-5 leading-relaxed">{audience.description}</p>

              {/* Highlights */}
              <ul className="space-y-2">
                {audience.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 flex-shrink-0 text-[#00d4ff]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#a1a1aa]">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
