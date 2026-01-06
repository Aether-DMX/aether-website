'use client';

const deploymentModes = [
  {
    name: 'Aether Local',
    badge: 'Air-Gapped Ready',
    description: 'Complete offline operation for high-security and mission-critical environments.',
    idealFor: 'High-security facilities, government buildings, venues without reliable internet',
    features: [
      'Fully offline operation',
      'No internet dependency',
      'All processing on-premise',
      'Zero external data transmission',
      'Local backup and recovery',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    gradient: 'from-[#a855f7] to-[#7c3aed]',
  },
  {
    name: 'Aether Hybrid',
    badge: 'Recommended',
    description: 'Best of both worlds: local reliability with cloud AI enhancement when available.',
    idealFor: 'Typical venues, churches, theaters, production companies',
    features: [
      'Local-first architecture',
      'Cloud AI when online',
      'Graceful offline fallback',
      'Automatic sync when connected',
      'Remote monitoring available',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    gradient: 'from-[#00d4ff] to-[#0099cc]',
    featured: true,
  },
  {
    name: 'Aether Cloud',
    badge: 'Enterprise',
    description: 'Full cloud integration for organizations managing multiple sites and teams.',
    idealFor: 'Large campuses, stadium complexes, multi-venue organizations',
    features: [
      'Advanced cloud AI features',
      'Multi-site management',
      'Remote access & control',
      'Centralized configuration',
      'Team collaboration tools',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    gradient: 'from-[#f59e0b] to-[#d97706]',
  },
];

export default function DeploymentModes() {
  return (
    <section id="deployment" className="py-24 lg:py-32 bg-[#111114]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Deploy <span className="gradient-text">Your Way</span>
          </h2>
          <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
            Three deployment modes to match your security requirements, connectivity 
            constraints, and operational preferences. <span className="text-[#f59e0b]">The beta focuses on Local and Hybrid modes; Cloud features are on our roadmap.</span>
          </p>
        </div>

        {/* Deployment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {deploymentModes.map((mode) => (
            <div
              key={mode.name}
              className={`relative bg-[#0a0a0c] border rounded-2xl p-8 card-hover ${
                mode.featured 
                  ? 'border-[#00d4ff]/50 ring-1 ring-[#00d4ff]/20' 
                  : 'border-[#1f1f24]'
              }`}
            >
              {/* Featured badge */}
              {mode.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {mode.badge}
                  </span>
                </div>
              )}

              {/* Non-featured badge */}
              {!mode.featured && mode.badge && (
                <div className="mb-4">
                  <span className="bg-[#1f1f24] text-[#71717a] text-xs font-medium px-3 py-1 rounded-full">
                    {mode.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${mode.gradient} flex items-center justify-center mb-6 text-white ${mode.featured ? 'mt-4' : ''}`}>
                {mode.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-2">{mode.name}</h3>

              {/* Description */}
              <p className="text-[#71717a] mb-4">{mode.description}</p>

              {/* Ideal for */}
              <p className="text-sm text-[#71717a] mb-6">
                <span className="text-white font-medium">Ideal for:</span> {mode.idealFor}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {mode.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg 
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${mode.featured ? 'text-[#00d4ff]' : 'text-[#71717a]'}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#a1a1aa]">{feature}</span>
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
