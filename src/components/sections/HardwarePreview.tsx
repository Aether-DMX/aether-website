import Link from 'next/link';

const hardwareTable = [
  {
    role: 'Main Controller',
    examples: 'Raspberry Pi 4/5, Mini PC',
    notes: 'Runs Aether Core UI + engine',
  },
  {
    role: 'DMX Nodes',
    examples: 'ESP32-S3 + RS485',
    notes: '1–2 DMX universes per node',
  },
  {
    role: 'Touchscreen',
    examples: '7–10" HDMI or Pi-compatible LCD',
    notes: 'Rack/touch kiosk setups',
  },
  {
    role: 'Networking',
    examples: 'Standard switch/router',
    notes: 'Internet optional; LAN required only',
  },
];

export default function HardwarePreview() {
  return (
    <section id="hardware" className="py-24 lg:py-32 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Runs on <span className="gradient-text">Real-World Gear</span>
            </h2>
            <p className="text-lg text-[#71717a] mb-8">
              Aether DMX is software-first and runs on off-the-shelf hardware. No proprietary 
              lock-in, no $15k controllers. Build with components you can source anywhere.
            </p>

            {/* Hardware Table */}
            <div className="bg-[#111114] border border-[#1f1f24] rounded-xl overflow-hidden mb-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#1f1f24]">
                    <th className="text-left text-xs font-semibold text-[#71717a] uppercase tracking-wider px-4 py-3">
                      Role
                    </th>
                    <th className="text-left text-xs font-semibold text-[#71717a] uppercase tracking-wider px-4 py-3">
                      Hardware
                    </th>
                    <th className="text-left text-xs font-semibold text-[#71717a] uppercase tracking-wider px-4 py-3 hidden sm:table-cell">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {hardwareTable.map((row, index) => (
                    <tr 
                      key={row.role}
                      className={index !== hardwareTable.length - 1 ? 'border-b border-[#1f1f24]' : ''}
                    >
                      <td className="px-4 py-4">
                        <span className="text-sm font-medium text-white">{row.role}</span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm text-[#00d4ff]">{row.examples}</span>
                      </td>
                      <td className="px-4 py-4 hidden sm:table-cell">
                        <span className="text-sm text-[#71717a]">{row.notes}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Link
              href="/hardware"
              className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#00b8e6] font-medium transition-colors"
            >
              View Full Hardware Guide
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-[#111114] border border-[#1f1f24] rounded-2xl p-8">
              {/* Simple network diagram */}
              <div className="flex flex-col items-center space-y-6">
                {/* Controller */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-16 bg-gradient-to-br from-[#1f1f24] to-[#0a0a0c] border border-[#2a2a30] rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                  </div>
                  <span className="text-xs text-[#71717a] mt-2">Controller</span>
                </div>

                {/* Connection line */}
                <div className="w-px h-8 bg-gradient-to-b from-[#00d4ff] to-[#1f1f24]" />

                {/* Switch */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-12 bg-gradient-to-br from-[#1f1f24] to-[#0a0a0c] border border-[#2a2a30] rounded-lg flex items-center justify-center">
                    <div className="flex gap-1">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-[#00d4ff]/60" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-[#71717a] mt-2">Network Switch</span>
                </div>

                {/* Connection lines */}
                <div className="flex items-center justify-center w-full gap-8">
                  <div className="w-px h-8 bg-gradient-to-b from-[#00d4ff] to-[#1f1f24]" />
                  <div className="w-px h-8 bg-gradient-to-b from-[#00d4ff] to-[#1f1f24]" />
                  <div className="w-px h-8 bg-gradient-to-b from-[#00d4ff] to-[#1f1f24]" />
                </div>

                {/* DMX Nodes */}
                <div className="flex items-center justify-center gap-4 sm:gap-8">
                  {['Universe 1', 'Universe 2', 'Universe 3'].map((label) => (
                    <div key={label} className="flex flex-col items-center">
                      <div className="w-14 h-10 sm:w-16 sm:h-12 bg-gradient-to-br from-[#a855f7]/20 to-[#0a0a0c] border border-[#a855f7]/30 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                        </svg>
                      </div>
                      <span className="text-xs text-[#71717a] mt-2 whitespace-nowrap">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Connection lines to fixtures */}
                <div className="flex items-center justify-center w-full gap-8">
                  <div className="w-px h-6 bg-gradient-to-b from-[#a855f7] to-[#1f1f24]" />
                  <div className="w-px h-6 bg-gradient-to-b from-[#a855f7] to-[#1f1f24]" />
                  <div className="w-px h-6 bg-gradient-to-b from-[#a855f7] to-[#1f1f24]" />
                </div>

                {/* Fixtures representation */}
                <div className="flex items-center justify-center gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-6 h-6 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, hsl(${180 + i * 15}, 80%, 50%), hsl(${200 + i * 15}, 80%, 30%))`,
                        boxShadow: `0 0 10px hsla(${180 + i * 15}, 80%, 50%, 0.5)`
                      }}
                    />
                  ))}
                </div>
                <span className="text-xs text-[#71717a]">Fixtures</span>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-gradient-to-r from-[#00d4ff]/10 via-[#a855f7]/10 to-[#00d4ff]/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
