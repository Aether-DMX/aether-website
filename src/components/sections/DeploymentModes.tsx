'use client';

const steps = [
  {
    number: '01',
    title: 'Set Up Your Controller',
    description: 'Flash the AETHER image onto a Raspberry Pi, connect a display, and power it on. The setup wizard handles the rest.',
    details: ['Works with Pi 4 or Pi 5', 'Boots directly into AETHER', 'No command line required'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    gradient: 'from-[#00d4ff] to-[#0099cc]',
  },
  {
    number: '02',
    title: 'Connect Your Nodes',
    description: 'Power on your DMX nodes and they automatically find the controller on AETHER\'s dedicated network. Connect wirelessly or via Ethernet — place them wherever your fixtures are.',
    details: ['Wireless or wired connection', 'Up to 2 universes per node', 'Runs on its own network — not your WiFi'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    gradient: 'from-[#a855f7] to-[#7c3aed]',
  },
  {
    number: '03',
    title: 'Design Your Looks',
    description: 'Patch your fixtures, build scenes with the AI assistant or manual controls, and go live. It\'s that simple.',
    details: ['AI scene generation', 'Voice commands supported', 'Live control from any device'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    gradient: 'from-[#f59e0b] to-[#d97706]',
  },
];

export default function DeploymentModes() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-[#111114]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
            From unboxing to your first scene in under an hour. No programming degree required.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-[#0a0a0c] border border-[#1f1f24] rounded-2xl p-8 card-hover"
            >
              {/* Step number */}
              <div className="text-6xl font-bold text-[#1f1f24] absolute top-6 right-6">
                {step.number}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 text-white`}>
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-[#71717a] mb-6">{step.description}</p>

              {/* Details */}
              <ul className="space-y-3">
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00d4ff]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#a1a1aa]">{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Connector line between cards (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#1f1f24] to-[#1f1f24]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
