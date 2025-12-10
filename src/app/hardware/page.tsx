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

const dmxNodeBOM = [
  {
    component: 'ESP32-S3 DevKit',
    recommendation: 'ESP32-S3-DevKitC-1 or Wemos S3',
    quantity: '1 per node',
    notes: 'Native USB, dual-core, WiFi/Bluetooth. S3 recommended over base ESP32.',
    link: 'https://www.espressif.com/en/products/devkits/esp32-s3-devkitc-1',
  },
  {
    component: 'RS485 Transceiver',
    recommendation: 'MAX485 or SN75176 module',
    quantity: '1–2 per node',
    notes: 'Use modules with built-in termination. One per DMX universe output.',
    link: null,
  },
  {
    component: '5-Pin XLR Female',
    recommendation: 'Neutrik NC5FAH or equivalent',
    quantity: '1–2 per node',
    notes: 'Panel-mount for enclosure. 3-pin acceptable but 5-pin preferred.',
    link: null,
  },
  {
    component: 'Power Supply',
    recommendation: '5V 2A USB-C or 5V regulated PSU',
    quantity: '1 per node',
    notes: 'Ensure stable 5V supply. Avoid cheap adapters that cause brownouts.',
    link: null,
  },
  {
    component: 'Enclosure',
    recommendation: 'IP65 junction box or 3D-printed case',
    quantity: '1 per node',
    notes: 'Protect from dust and moisture in rack environments.',
    link: null,
  },
  {
    component: 'Ethernet Module (optional)',
    recommendation: 'W5500 Ethernet module',
    quantity: '1 per node',
    notes: 'For wired networks. WiFi built-in on ESP32-S3.',
    link: null,
  },
];

const touchscreens = [
  {
    name: '7" Official Raspberry Pi Display',
    resolution: '800×480',
    mount: 'Desktop, VESA, custom bracket',
    notes: 'Plug-and-play with Pi. Good for compact setups.',
  },
  {
    name: '10.1" HDMI Touchscreen',
    resolution: '1280×800',
    mount: 'VESA, rack mount kit available',
    notes: 'Recommended for rack installations. Ensure capacitive touch.',
  },
  {
    name: 'Elecrow 7" HDMI Display',
    resolution: '1024×600',
    mount: 'Desktop, bracket',
    notes: 'Budget-friendly option. Works well for portable setups.',
  },
  {
    name: 'Waveshare 10.1" HDMI LCD',
    resolution: '1280×800',
    mount: 'VESA, rack',
    notes: 'High build quality. IPS panel for wide viewing angles.',
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
              <h3 className="text-[#f59e0b] font-semibold mb-1">Beta Hardware Requirements</h3>
              <p className="text-sm text-[#71717a]">
                Early beta users are expected to be comfortable with basic hardware assembly. 
                We provide recommended parts lists and wiring diagrams, but hands-on work is required. 
                Pre-assembled hardware options are planned for future releases.
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

      {/* DMX Node BOM */}
      <section className="py-16 lg:py-24 bg-[#111114]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">DMX Node Bill of Materials</h2>
          <p className="text-[#71717a] mb-8 max-w-2xl">
            Each DMX node handles 1–2 universes of DMX output. Build as many nodes as 
            your installation requires. All components are available from standard electronics suppliers.
          </p>

          <div className="bg-[#0a0a0c] border border-[#1f1f24] rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-[#1f1f24]">
                    <th className="text-left text-xs font-semibold text-[#71717a] uppercase tracking-wider px-6 py-4">
                      Component
                    </th>
                    <th className="text-left text-xs font-semibold text-[#71717a] uppercase tracking-wider px-6 py-4">
                      Recommendation
                    </th>
                    <th className="text-left text-xs font-semibold text-[#71717a] uppercase tracking-wider px-6 py-4">
                      Quantity
                    </th>
                    <th className="text-left text-xs font-semibold text-[#71717a] uppercase tracking-wider px-6 py-4">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dmxNodeBOM.map((item, index) => (
                    <tr 
                      key={item.component}
                      className={index !== dmxNodeBOM.length - 1 ? 'border-b border-[#1f1f24]' : ''}
                    >
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-white">{item.component}</span>
                      </td>
                      <td className="px-6 py-4">
                        {item.link ? (
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#00d4ff] hover:underline"
                          >
                            {item.recommendation}
                          </a>
                        ) : (
                          <span className="text-sm text-[#00d4ff]">{item.recommendation}</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-[#a1a1aa]">{item.quantity}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-[#71717a]">{item.notes}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Estimated Cost */}
          <div className="mt-6 p-4 bg-[#0a0a0c] border border-[#1f1f24] rounded-lg">
            <p className="text-sm text-[#71717a]">
              <span className="text-white font-medium">Estimated cost per node:</span> $25–$45 USD 
              depending on component choices and supplier. Quantity discounts available on most parts.
            </p>
          </div>
        </div>
      </section>

      {/* Touchscreens */}
      <section className="py-16 lg:py-24 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Touchscreen Displays</h2>
          <p className="text-[#71717a] mb-8 max-w-2xl">
            Aether DMX is designed for touch-first operation. Any HDMI display with 
            USB touch input will work, but these are tested and recommended.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {touchscreens.map((screen) => (
              <div
                key={screen.name}
                className="bg-[#111114] border border-[#1f1f24] rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{screen.name}</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-[#71717a]">Resolution:</span>{' '}
                    <span className="text-[#00d4ff]">{screen.resolution}</span>
                  </p>
                  <p>
                    <span className="text-[#71717a]">Mounting:</span>{' '}
                    <span className="text-white">{screen.mount}</span>
                  </p>
                  <p className="text-[#71717a]">{screen.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Topology */}
      <section className="py-16 lg:py-24 bg-[#111114]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Network Topology</h2>
          <p className="text-[#71717a] mb-8 max-w-2xl">
            Aether DMX uses standard Ethernet for communication between the controller 
            and DMX nodes. No specialized networking hardware required.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Local/Offline Topology */}
            <div className="bg-[#0a0a0c] border border-[#1f1f24] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#a855f7]" />
                Local / Offline Network
              </h3>
              <div className="bg-[#111114] rounded-lg p-6 mb-4">
                {/* Simple ASCII-style diagram */}
                <pre className="text-xs sm:text-sm text-[#71717a] font-mono overflow-x-auto">
{`┌─────────────────┐
│   Controller    │
│  (Raspberry Pi) │
└────────┬────────┘
         │
┌────────┴────────┐
│  Network Switch │
│   (Unmanaged)   │
└──┬─────┬─────┬──┘
   │     │     │
┌──┴──┐┌─┴─┐┌──┴──┐
│Node1││N2 ││Node3│
└──┬──┘└─┬─┘└──┬──┘
   │     │     │
  DMX   DMX   DMX
Fixtures`}
                </pre>
              </div>
              <ul className="space-y-2 text-sm text-[#71717a]">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No internet connection required
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  All processing happens on local controller
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ideal for secure or air-gapped environments
                </li>
              </ul>
            </div>

            {/* Hybrid/Cloud Topology */}
            <div className="bg-[#0a0a0c] border border-[#1f1f24] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#00d4ff]" />
                Hybrid / Cloud Network
              </h3>
              <div className="bg-[#111114] rounded-lg p-6 mb-4">
                <pre className="text-xs sm:text-sm text-[#71717a] font-mono overflow-x-auto">
{`         ┌─────────────┐
         │ Aether Cloud│
         │   (AI/Sync) │
         └──────┬──────┘
                │ Internet
┌───────────────┴───────────────┐
│            Router             │
└───────────────┬───────────────┘
         ┌──────┴──────┐
         │   Controller │
         └──────┬──────┘
         ┌──────┴──────┐
         │   Switch    │
         └──┬────┬────┬┘
            │    │    │
          Nodes → DMX → Fixtures`}
                </pre>
              </div>
              <ul className="space-y-2 text-sm text-[#71717a]">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#00d4ff] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cloud AI features when online
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#00d4ff] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Continues to function fully offline
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#00d4ff] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Remote monitoring and multi-site sync
                </li>
              </ul>
            </div>
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
                <strong className="text-white">Electrical Safety:</strong> DMX nodes involve low-voltage 
                DC electronics. Ensure proper isolation between DMX/RS485 signals and AC power. 
                If you&apos;re not comfortable with basic electronics, we recommend waiting for 
                pre-assembled hardware options.
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-[#71717a] mb-8">
            Join the beta to get access to detailed wiring diagrams, firmware downloads, 
            and step-by-step assembly guides.
          </p>
          <Link href="/#beta" className="btn-primary inline-block">
            Apply for Private Beta
          </Link>
        </div>
      </section>
    </div>
  );
}
