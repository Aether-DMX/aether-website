import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hardware Guide | Aether DMX',
  description: 'Complete hardware compatibility guide for Aether DMX. Learn about recommended controllers, DMX nodes, touchscreens, and network configurations.',
  keywords: ['DMX hardware', 'Raspberry Pi DMX', 'ESP32 DMX node', 'DMX controller hardware', 'architectural lighting hardware'],
};

const controllerHardware = [
  {
    name: 'Raspberry Pi 5',
    badge: 'Recommended',
    specs: '4GB+ RAM, 32GB+ storage',
    notes: 'Best performance for UI and engine. Native 64-bit support.',
    link: 'https://www.raspberrypi.com/products/raspberry-pi-5/',
  },
  {
    name: 'Raspberry Pi 4',
    badge: 'Supported',
    specs: '4GB+ RAM, 32GB+ storage',
    notes: 'Good performance. Well-tested platform with broad community support.',
    link: 'https://www.raspberrypi.com/products/raspberry-pi-4-model-b/',
  },
  {
    name: 'Intel NUC / Mini PC',
    badge: 'Supported',
    specs: 'i3+ CPU, 8GB+ RAM, SSD',
    notes: 'Higher performance for complex installations. Standard x86 compatibility.',
    link: null,
  },
];


const operatingModes = [
  {
    name: 'Touchscreen Kiosk',
    icon: 'monitor',
    description: 'Dedicated touchscreen display connected to the Pi for a purpose-built lighting console experience.',
    features: ['Touch-first UI', 'Kiosk mode auto-launch', 'HDMI + USB touch input'],
  },
  {
    name: 'Tablet / Phone',
    icon: 'tablet',
    description: 'Access the Aether UI from any device on AETHER\'s dedicated network through a web browser.',
    features: ['Any modern browser', 'Responsive mobile UI', 'Multiple users at once'],
  },
  {
    name: 'Desktop / Laptop',
    icon: 'desktop',
    description: 'Full control from a computer on AETHER\'s network. Great for programming complex shows.',
    features: ['Mouse + keyboard workflow', 'Large screen layouts', 'Multi-monitor support'],
  },
  {
    name: 'Headless',
    icon: 'headless',
    description: 'Run the Pi with no display attached. Connect from any device on AETHER\'s network to control everything.',
    features: ['Minimal hardware footprint', 'Access from any browser', 'Scheduled playback + API'],
  },
];

export default function HardwarePage() {
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
              Hardware <span className="gradient-text">Guide</span>
            </h1>
            <p className="text-xl text-[#71717a] leading-relaxed">
              Aether DMX is hardware-agnostic within recommended specifications. 
              This guide covers everything you need to build a complete system from 
              off-the-shelf components.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-[#111114] border-y border-[#1f1f24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 p-4 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-lg">
            <svg className="w-6 h-6 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="text-[#f59e0b] font-semibold mb-1">Beta Hardware Program</h3>
              <p className="text-sm text-[#71717a]">
                The first 5 accepted beta users will receive a free DMX node hardware kit.
                Additional approved beta users will receive a hardware spec sheet to source
                their own components, or can purchase pre-assembled kits from our upcoming store.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Controller Hardware */}
      <section className="py-16 lg:py-24 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Controller Hardware</h2>
          <p className="text-[#71717a] mb-8 max-w-2xl">
            The controller runs the Aether Core engine and user interface. 
            Choose based on your performance needs and existing infrastructure.
          </p>

          <div className="grid gap-6">
            {controllerHardware.map((controller) => (
              <div
                key={controller.name}
                className="bg-[#111114] border border-[#1f1f24] rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-white">{controller.name}</h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      controller.badge === 'Recommended' 
                        ? 'bg-[#00d4ff]/20 text-[#00d4ff]' 
                        : 'bg-[#1f1f24] text-[#71717a]'
                    }`}>
                      {controller.badge}
                    </span>
                  </div>
                  <p className="text-sm text-[#00d4ff] mb-1">{controller.specs}</p>
                  <p className="text-sm text-[#71717a]">{controller.notes}</p>
                </div>
                {controller.link && (
                  <a
                    href={controller.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm whitespace-nowrap"
                  >
                    View Product →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DMX Nodes */}
      <section className="py-16 lg:py-24 bg-[#111114]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">DMX Nodes</h2>
          <p className="text-[#71717a] mb-8 max-w-2xl">
            Each DMX node handles 1–2 universes of DMX output and connects via WiFi or Ethernet
            on AETHER&apos;s dedicated network. Add as many nodes as your installation requires — there&apos;s no universe limit.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Free Kit */}
            <div className="bg-[#0a0a0c] border border-[#00d4ff]/30 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">First 5 Beta Users</h3>
              <p className="text-sm text-[#71717a] mb-4">
                The first 5 accepted beta participants receive a free pre-assembled
                DMX node kit — everything you need to get started.
              </p>
              <Link href="/#beta" className="text-sm text-[#00d4ff] hover:underline">
                Apply now →
              </Link>
            </div>

            {/* DIY */}
            <div className="bg-[#0a0a0c] border border-[#1f1f24] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#a855f7]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Build Your Own</h3>
              <p className="text-sm text-[#71717a]">
                Approved beta users receive a detailed hardware spec sheet with
                recommended components to source and assemble themselves.
              </p>
            </div>

            {/* Store */}
            <div className="bg-[#0a0a0c] border border-[#1f1f24] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Buy Pre-Assembled</h3>
              <p className="text-sm text-[#71717a]">
                Don&apos;t want to build? Pre-assembled DMX node kits will be
                available for purchase in our upcoming store.
              </p>
              <span className="inline-block mt-4 text-xs font-medium px-2 py-1 rounded bg-[#f59e0b]/20 text-[#f59e0b]">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Modes */}
      <section className="py-16 lg:py-24 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ways to Control</h2>
          <p className="text-[#71717a] mb-8 max-w-2xl">
            Aether DMX runs as a web app on its own dedicated network — separate from
            your venue WiFi. Access it from any device — no special software to install.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {operatingModes.map((mode) => (
              <div
                key={mode.name}
                className="bg-[#111114] border border-[#1f1f24] rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  {mode.icon === 'monitor' && (
                    <svg className="w-6 h-6 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {mode.icon === 'tablet' && (
                    <svg className="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )}
                  {mode.icon === 'desktop' && (
                    <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {mode.icon === 'headless' && (
                    <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  )}
                  <h3 className="text-lg font-semibold text-white">{mode.name}</h3>
                </div>
                <p className="text-sm text-[#71717a] mb-4">{mode.description}</p>
                <ul className="space-y-1.5">
                  {mode.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[#a1a1aa]">
                      <svg className="w-3.5 h-3.5 text-[#00d4ff] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111114] border border-[#1f1f24] rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-white mb-4">Important Disclaimer</h2>
            <div className="space-y-4 text-sm text-[#71717a]">
              <p>
                <strong className="text-white">Hardware Compatibility:</strong> While Aether DMX is designed 
                to work with the hardware listed on this page, we cannot guarantee compatibility with 
                every configuration. Using unsupported hardware, non-recommended components, or custom 
                wiring configurations is at your own risk.
              </p>
              <p>
                <strong className="text-white">Electrical Safety:</strong> DMX nodes use standard
                low-voltage connections. If you&apos;re not comfortable with basic electronics,
                we recommend purchasing a pre-assembled kit from our upcoming store.
              </p>
              <p>
                <strong className="text-white">Best Experience:</strong> For the most reliable 
                experience and full support, use the recommended components listed on this page. 
                Our team actively tests these configurations and can provide better assistance 
                when troubleshooting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#111114] border-t border-[#1f1f24]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-[#71717a] mb-8">
            Join the beta to get firmware access, hardware specs, and full setup
            support. The first 5 users get a free hardware kit.
          </p>
          <Link href="/#beta" className="btn-primary inline-block">
            Apply for Private Beta
          </Link>
        </div>
      </section>
    </div>
  );
}
