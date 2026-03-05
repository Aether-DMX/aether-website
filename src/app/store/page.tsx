import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Store | Aether DMX',
  description: 'Browse Aether DMX hardware — wireless and wired DMX nodes, touchscreens, power adapters, and connectors. Join the waitlist for pre-assembled kits.',
  keywords: ['DMX node', 'ESP32 DMX', 'wireless DMX hardware', 'Aether DMX store', 'DMX accessories', 'wired DMX node'],
};

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'waitlist' | 'coming_soon';
  accentColor: string;
  gradient: string;
  iconPath: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 'dmx-node',
    name: 'DMX Node',
    tagline: 'Wireless & Wired DMX Output',
    description:
      'ESP32-based node that outputs up to 2 universes of DMX512. Connect via WiFi or Ethernet on AETHER\'s dedicated network. Failsafe playback keeps your lights running even if the connection drops.',
    status: 'waitlist',
    accentColor: '#00d4ff',
    gradient: 'from-[#00d4ff] to-[#0099cc]',
    iconPath:
      'M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z',
    features: [
      'Up to 2 DMX universes per node',
      'WiFi or Ethernet connection',
      'Failsafe autonomous playback',
      'OTA firmware updates',
      'Compact enclosure',
    ],
  },
  {
    id: 'touchscreen',
    name: 'Touchscreen Display',
    tagline: 'Dedicated Console Display',
    description:
      'Compatible touchscreen for the Raspberry Pi controller. Mount it as a dedicated lighting console with AETHER\'s kiosk mode — boots straight into the control UI.',
    status: 'waitlist',
    accentColor: '#a855f7',
    gradient: 'from-[#a855f7] to-[#7c3aed]',
    iconPath:
      'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    features: [
      '7-inch or 10-inch IPS display',
      'Integrated touch input',
      'Wall-mount or desktop install',
      'Kiosk mode auto-launch',
    ],
  },
  {
    id: 'power-adapters',
    name: '12V / 24V Power Adapters',
    tagline: 'Clean Power for Your Nodes',
    description:
      'Tested and approved power supplies for DMX nodes. Available in 12V and 24V variants to match your installation requirements.',
    status: 'coming_soon',
    accentColor: '#f59e0b',
    gradient: 'from-[#f59e0b] to-[#d97706]',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    features: [
      '12V and 24V options',
      'UL / CE certified',
      'Barrel connector included',
    ],
  },
  {
    id: 'dmx-connectors',
    name: 'DMX Connectors & Cables',
    tagline: 'Professional Cabling',
    description:
      'XLR-3 and XLR-5 connectors, DMX cables, and terminators. Everything you need to wire your DMX chain properly.',
    status: 'coming_soon',
    accentColor: '#f59e0b',
    gradient: 'from-[#f59e0b] to-[#d97706]',
    iconPath:
      'M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244',
    features: [
      'XLR-3 and XLR-5 options',
      'DMX-rated shielded cable',
      'Terminators included',
    ],
  },
];

export default function StorePage() {
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

            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#111114] border border-[#1f1f24] rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f59e0b] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f59e0b]"></span>
              </span>
              <span className="text-sm text-[#a1a1aa]">Pre-orders opening soon</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Aether <span className="gradient-text">Store</span>
            </h1>
            <p className="text-xl text-[#71717a] leading-relaxed">
              Everything you need to build a complete Aether DMX system.
              Pre-assembled hardware kits and accessories &mdash; source it yourself
              or get it from us.
            </p>
          </div>
        </div>
      </section>

      {/* Beta Hardware Program Banner */}
      <section className="py-8 bg-[#111114] border-y border-[#1f1f24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 p-4 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-lg">
            <svg className="w-6 h-6 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            <div>
              <h3 className="text-[#f59e0b] font-semibold mb-1">Beta Hardware Program</h3>
              <p className="text-sm text-[#71717a]">
                The first 5 accepted beta users receive a free pre-assembled DMX node kit &mdash;
                everything you need to get started. Additional approved users receive a hardware
                spec sheet to build their own.{' '}
                <Link href="/#beta" className="text-[#00d4ff] hover:underline">
                  Apply for the beta &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 lg:py-24 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className={`bg-[#111114] border border-[#1f1f24] rounded-xl overflow-hidden card-hover ${
                  product.status === 'coming_soon' ? 'opacity-75' : ''
                }`}
              >
                {/* Image Placeholder */}
                <div
                  className={`h-48 bg-gradient-to-br ${product.gradient} relative flex items-center justify-center`}
                  style={{ opacity: product.status === 'coming_soon' ? 0.5 : 1 }}
                >
                  <svg
                    className="w-16 h-16 text-white/80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={product.iconPath}
                    />
                  </svg>

                  {/* Status Badge */}
                  {product.status === 'waitlist' && (
                    <span className="absolute top-4 right-4 text-xs font-medium px-2.5 py-1 rounded-full bg-black/40 text-[#00d4ff] backdrop-blur-sm border border-[#00d4ff]/30">
                      Waitlist Open
                    </span>
                  )}
                  {product.status === 'coming_soon' && (
                    <span className="absolute top-4 right-4 text-xs font-medium px-2.5 py-1 rounded-full bg-black/40 text-[#f59e0b] backdrop-blur-sm border border-[#f59e0b]/30">
                      Coming Soon
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: product.accentColor }}
                  >
                    {product.tagline}
                  </p>
                  <p className="text-sm text-[#71717a] mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-1.5 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[#a1a1aa]">
                        <svg
                          className="w-3.5 h-3.5 flex-shrink-0"
                          style={{ color: product.accentColor }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {product.status === 'waitlist' ? (
                    <Link
                      href="/#beta"
                      className="btn-primary text-sm w-full block text-center py-3"
                    >
                      Join Waitlist
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="btn-secondary text-sm w-full py-3 opacity-50 cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-24 bg-[#111114] border-t border-[#1f1f24]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-[#71717a] mb-8">
            Join the beta to get early access to hardware kits, firmware, and full
            setup support. The first 5 users get a free DMX node kit.
          </p>
          <Link href="/#beta" className="btn-primary inline-block">
            Apply for Private Beta
          </Link>
        </div>
      </section>
    </div>
  );
}
