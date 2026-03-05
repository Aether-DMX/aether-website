import Link from 'next/link';

const items = [
  {
    title: 'A Raspberry Pi',
    description: 'Any Raspberry Pi 4 or 5. Pair it with a touchscreen for a dedicated console, or run it headless and control from any browser.',
    detail: 'Raspberry Pi 4 or 5',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    gradient: 'from-[#00d4ff] to-[#0099cc]',
  },
  {
    title: 'DMX Nodes',
    description: 'Small nodes that output DMX to your fixtures — connect wirelessly or via Ethernet. The first 5 beta users receive a free hardware kit. Others can build their own or buy pre-assembled.',
    detail: 'Wired or wireless',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    gradient: 'from-[#a855f7] to-[#7c3aed]',
  },
  {
    title: 'Your Fixtures',
    description: 'Works with any DMX512 fixture — dimmers, RGB LEDs, moving heads, pixel tape, and more. If it speaks DMX, AETHER controls it.',
    detail: 'Any DMX512 fixture',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    gradient: 'from-[#f59e0b] to-[#d97706]',
  },
];

export default function HardwarePreview() {
  return (
    <section id="hardware" className="py-24 lg:py-32 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What You <span className="gradient-text">Need</span>
          </h2>
          <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
            No proprietary hardware. No expensive controllers. Just off-the-shelf components
            you can source anywhere.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-[#111114] border border-[#1f1f24] rounded-2xl p-8 card-hover text-center"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-6 text-white`}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>

              {/* Description */}
              <p className="text-sm text-[#71717a] mb-4 leading-relaxed">{item.description}</p>

              {/* Price detail */}
              <span className="inline-block bg-[#0a0a0c] border border-[#1f1f24] rounded-full px-4 py-1.5 text-sm text-[#00d4ff] font-medium">
                {item.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-[#111114] border border-[#1f1f24] rounded-2xl px-8 py-5">
            <div className="text-left">
              <div className="text-white font-medium">Built from off-the-shelf components</div>
              <div className="text-sm text-[#71717a]">No proprietary hardware. Source everything yourself or get a kit from us.</div>
            </div>
          </div>
        </div>

        {/* Link to hardware page */}
        <div className="text-center mt-8">
          <Link href="/hardware" className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#00b8e6] font-medium transition-colors">
            View Full Hardware Details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
