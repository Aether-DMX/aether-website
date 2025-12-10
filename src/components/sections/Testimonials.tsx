const testimonials = [
  {
    quote: "This does what our $12k controller couldn't. The AI scene builder alone has saved us hours of programming time.",
    author: "Michael Chen",
    role: "Technical Director",
    organization: "800-seat Church",
    avatar: 'MC',
  },
  {
    quote: "Finally, a DMX system that doesn't require a proprietary hardware investment. Running this on a Raspberry Pi is brilliant.",
    author: "Sarah Rodriguez",
    role: "Lighting Designer",
    organization: "Regional Theater",
    avatar: 'SR',
  },
  {
    quote: "The offline-first approach was crucial for us. Our venue has unreliable internet, and Aether just works.",
    author: "David Park",
    role: "AV Director",
    organization: "Corporate Event Center",
    avatar: 'DP',
  },
  {
    quote: "As an integrator, I'm excited about the modular node architecture. It makes scaling installations so much easier.",
    author: "James Thompson",
    role: "System Integrator",
    organization: "ProLight Systems",
    avatar: 'JT',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#111114]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Trusted by <span className="gradient-text">Professionals</span>
          </h2>
          <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
            Early beta users are already seeing the difference intelligent lighting control can make.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-[#0a0a0c] border border-[#1f1f24] rounded-xl p-6 sm:p-8 card-hover"
            >
              {/* Quote Icon */}
              <svg
                className="w-8 h-8 text-[#00d4ff]/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <blockquote className="text-white text-lg mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#a855f7] flex items-center justify-center text-black font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-sm text-[#71717a]">
                    {testimonial.role}, {testimonial.organization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#71717a] bg-[#0a0a0c] border border-[#1f1f24] rounded-lg px-4 py-2 inline-block">
            <span className="text-[#f59e0b]">Beta Note:</span> These are representative testimonials. 
            Real feedback from beta users coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}
