import Link from 'next/link';
import Image from 'next/image';

const hardwareTable = [
  {
    role: 'Main Controller',
    examples: 'Raspberry Pi 4/5, Mini PC',
    notes: 'Runs Aether Core UI + engine',
  },
  {
    role: 'DMX Nodes',
    examples: 'ESP32-S3 + RS485',
    notes: '1-2 DMX universes per node',
  },
  {
    role: 'Touchscreen',
    examples: '7-10" HDMI or Pi-compatible LCD',
    notes: 'Rack/touch kiosk setups',
  },
  {
    role: 'Networking',
    examples: 'Standard WiFi from Pi',
    notes: 'Internet optional; works offline',
  },
];

export default function HardwarePreview() {
  return (
    <section id="hardware" className="py-24 lg:py-32 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Runs on <span className="gradient-text">Real-World Gear</span>
            </h2>
            <p className="text-lg text-[#71717a] mb-8">
              Aether DMX is software-first and runs on off-the-shelf hardware. No proprietary 
              lock-in, no expensive proprietary controllers. Build with components you can source anywhere.
            </p>
            <div className="bg-[#111114] border border-[#1f1f24] rounded-xl overflow-hidden mb-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#1f1f24]">
                    <th className="text-left text-xs font-semibold text-[#71717a] uppercase tracking-wider px-4 py-3">Role</th>
                    <th className="text-left text-xs font-semibold text-[#71717a] uppercase tracking-wider px-4 py-3">Hardware</th>
                    <th className="text-left text-xs font-semibold text-[#71717a] uppercase tracking-wider px-4 py-3 hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {hardwareTable.map((row, index) => (
                    <tr key={row.role} className={index !== hardwareTable.length - 1 ? 'border-b border-[#1f1f24]' : ''}>
                      <td className="px-4 py-4"><span className="text-sm font-medium text-white">{row.role}</span></td>
                      <td className="px-4 py-4"><span className="text-sm text-[#00d4ff]">{row.examples}</span></td>
                      <td className="px-4 py-4 hidden sm:table-cell"><span className="text-sm text-[#71717a]">{row.notes}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link href="/hardware" className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#00b8e6] font-medium transition-colors">
              View Full Hardware Guide
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          <div className="relative">
            <Image src="/ecosystem-diagram.png" alt="Aether DMX Ecosystem - Controller broadcasting WiFi to Aether-Pulse nodes with universe splitting" width={600} height={800} className="rounded-2xl" priority />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-gradient-to-r from-[#00d4ff]/10 via-[#a855f7]/10 to-[#00d4ff]/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
