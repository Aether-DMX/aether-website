import Link from 'next/link';

const pricingTiers = [
  {
    name: 'Creator',
    badge: 'Beta',
    description: 'For techs, tinkerers, and small venues getting started with intelligent lighting control.',
    price: '$19',
    period: '/mo',
    annual: '$149/yr',
    features: [
      'Up to 2 sites',
      'Unlimited universes per site',
      'AI scene generation (online)',
      'Local-first operation',
      'Community support',
      'Beta feature access',
    ],
    cta: 'Apply for Beta',
    ctaLink: '#beta',
    popular: false,
  },
  {
    name: 'Pro',
    badge: 'Coming Soon',
    description: 'For integrators, designers, and production companies managing multiple venues.',
    price: '$39',
    period: '/mo',
    annual: '$299/yr',
    features: [
      'Up to 10 sites',
      'Local + Hybrid modes',
      'Advanced AI features',
      'Priority email support',
      'Multi-universe routing',
      'Fixture library access',
      'Remote monitoring',
    ],
    cta: 'Apply for Beta',
    ctaLink: '#beta',
    popular: true,
  },
  {
    name: 'Enterprise',
    badge: 'Contact Us',
    description: 'For campuses, stadiums, and organizations with complex multi-site requirements.',
    price: 'Custom',
    period: '',
    annual: '',
    features: [
      'Unlimited sites',
      'On-premise AI options',
      'Multi-site management',
      'Custom integrations',
      'SLA guarantees',
      'Dedicated support',
      'Training & onboarding',
      'Volume licensing',
    ],
    cta: 'Contact Sales',
    ctaLink: 'mailto:enterprise@aetherdmx.com',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-[#111114]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Early Access <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
            The private beta is completely free during testing. These prices represent founding member rates available to beta participants after launch. 
            Simple, transparent pricing that scales with your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-[#0a0a0c] border rounded-2xl p-8 flex flex-col ${
                tier.popular 
                  ? 'border-[#00d4ff]/50 ring-1 ring-[#00d4ff]/20' 
                  : 'border-[#1f1f24]'
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-black text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className={tier.popular ? 'pt-4' : ''}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <span className="text-xs font-medium text-[#71717a] bg-[#1f1f24] px-2 py-1 rounded">
                    {tier.badge}
                  </span>
                </div>
                <p className="text-sm text-[#71717a] mb-6">{tier.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.period && (
                    <span className="text-[#71717a] ml-1">{tier.period}</span>
                  )}
                </div>
                {tier.annual && (
                  <p className="text-sm text-[#71717a] mt-1">
                    or {tier.annual} <span className="text-[#00d4ff]">(save 35%)</span>
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg 
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.popular ? 'text-[#00d4ff]' : 'text-[#71717a]'}`}
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

              {/* CTA */}
              <Link
                href={tier.ctaLink}
                className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                  tier.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Teaser */}
        <div className="mt-16 text-center">
          <p className="text-[#71717a]">
            Have questions about pricing or licensing?{' '}
            <a href="mailto:hello@aetherdmx.com" className="text-[#00d4ff] hover:underline">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
