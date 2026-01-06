'use client';

import { useState, useEffect } from 'react';

// Supabase configuration
const SUPABASE_URL = 'https://bremtbubaehnbeobwksj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyZW10YnViYWVobmJlb2J3a3NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzNjcwODAsImV4cCI6MjA4MDk0MzA4MH0.bWa5bJm7RtxljvIa1xJbH5jqiZVa5y7-MwCS5fVkunA';

interface FormData {
  name: string;
  email: string;
  role: string;
  organization: string;
  country: string;
  currentSystem: string;
  comfortLevel: string;
  goals: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  role?: string;
  organization?: string;
  country?: string;
  currentSystem?: string;
  comfortLevel?: string;
}

export default function BetaSignup() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    role: '',
    organization: '',
    country: '',
    currentSystem: '',
    comfortLevel: '',
    goals: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [utmParams, setUtmParams] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    referrer: '',
  });

  // Capture UTM params on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setUtmParams({
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
        referrer: document.referrer || '',
      });
    }
  }, []);

  const roles = [
    'Lighting Designer',
    'System Integrator',
    'Technical Director',
    'Venue Operator',
    'Church Tech',
    'Theater Tech',
    'Production Manager',
    'AV Specialist',
    'Hobbyist / Tinkerer',
    'Other',
  ];

  // Map website roles to database roles
  const roleMapping: Record<string, string> = {
    'Lighting Designer': 'integrator',
    'System Integrator': 'integrator',
    'Technical Director': 'theater',
    'Venue Operator': 'venue',
    'Church Tech': 'church_tech',
    'Theater Tech': 'theater',
    'Production Manager': 'theater',
    'AV Specialist': 'integrator',
    'Hobbyist / Tinkerer': 'hobbyist',
    'Other': 'other',
  };

  // Map comfort level to experience
  const experienceMapping: Record<string, string> = {
    'yes': 'advanced',
    'somewhat': 'intermediate',
    'no': 'beginner',
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }

    if (!formData.comfortLevel) {
      newErrors.comfortLevel = 'Please select your comfort level';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Map form data to Supabase schema
      const payload = {
        email: formData.email.toLowerCase().trim(),
        full_name: formData.name.trim(),
        company: formData.organization.trim() || null,
        role: roleMapping[formData.role] || 'other',
        venue_type: null,
        current_system: formData.currentSystem.trim() || null,
        experience_level: experienceMapping[formData.comfortLevel] || 'intermediate',
        interest_reason: formData.goals.trim() || null,
        how_heard: null,
        wants_hardware: formData.comfortLevel === 'yes',
        newsletter_opt_in: true,
        utm_source: utmParams.utm_source || null,
        utm_medium: utmParams.utm_medium || null,
        utm_campaign: utmParams.utm_campaign || null,
        referrer: utmParams.referrer || null,
      };

      const response = await fetch(`${SUPABASE_URL}/functions/v1/beta-signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit');
      }

      if (result.success) {
        setIsSubmitted(true);
        
        // Track conversion (Google Analytics)
        if (typeof window !== 'undefined' && (window as unknown as { gtag?: (cmd: string, event: string, params: Record<string, string>) => void }).gtag) {
          (window as unknown as { gtag: (cmd: string, event: string, params: Record<string, string>) => void }).gtag('event', 'sign_up', { method: 'beta_form' });
        }
      } else {
        throw new Error(result.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  if (isSubmitted) {
    return (
      <section id="beta" className="py-24 lg:py-32 bg-[#0a0a0c]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#111114] border border-[#1f1f24] rounded-2xl p-12">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff] to-[#0099cc] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              You&apos;re on the list!
            </h2>
            <p className="text-[#71717a] mb-6">
              Thank you for your interest in Aether DMX. We&apos;ll be in touch soon with 
              beta access details and next steps.
            </p>
            <p className="text-sm text-[#71717a]">
              In the meantime, join our{' '}
              <a href="https://discord.gg/w7WffZUb" className="text-[#00d4ff] hover:underline">
                Discord community
              </a>{' '}
              to connect with other early adopters.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="beta" className="py-24 lg:py-32 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Join the <span className="gradient-text">Private Beta</span>
            </h2>
            <p className="text-lg text-[#71717a] mb-8">
              We&apos;re inviting a select group of lighting professionals to help shape 
              Aether DMX before public release. The beta is completely free during the testing phase. Early adopters will receive founding member 
              pricing after launch.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Who we&apos;re looking for</h3>
                  <p className="text-sm text-[#71717a]">
                    Lighting designers, integrators, church/theatre techs, and venue operators 
                    who are comfortable with DIY hardware setups.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#a855f7]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">What you'll receive</h3>
                  <p className="text-sm text-[#71717a]">
                    A welcome email with setup instructions, Discord access to connect with other beta users and the Aether team, 
                    and early guidance on hardware assembly and software usage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#22c55e]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Founding member benefits</h3>
                  <p className="text-sm text-[#71717a]">
                    Lock in special pricing, get priority support, and receive credits for 
                    contributed fixture profiles or bug reports.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#111114] border border-[#1f1f24] rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Submit Error */}
              {submitError && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-lg px-4 py-3 text-red-400 text-sm">
                  {submitError}
                </div>
              )}

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-[#0a0a0c] border rounded-lg px-4 py-3 text-white placeholder-[#71717a] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition-all ${
                    errors.name ? 'border-red-500' : 'border-[#1f1f24]'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-[#0a0a0c] border rounded-lg px-4 py-3 text-white placeholder-[#71717a] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition-all ${
                    errors.email ? 'border-red-500' : 'border-[#1f1f24]'
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Role */}
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-white mb-2">
                  Role <span className="text-red-500">*</span>
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={`w-full bg-[#0a0a0c] border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition-all ${
                    errors.role ? 'border-red-500' : 'border-[#1f1f24]'
                  }`}
                >
                  <option value="">Select your role</option>
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
                {errors.role && (
                  <p className="mt-1 text-sm text-red-500">{errors.role}</p>
                )}
              </div>

              {/* Organization */}
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-white mb-2">
                  Organization / Venue
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0c] border border-[#1f1f24] rounded-lg px-4 py-3 text-white placeholder-[#71717a] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition-all"
                  placeholder="Company or venue name"
                />
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-white mb-2">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0c] border border-[#1f1f24] rounded-lg px-4 py-3 text-white placeholder-[#71717a] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition-all"
                  placeholder="Your country"
                />
              </div>

              {/* Current System */}
              <div>
                <label htmlFor="currentSystem" className="block text-sm font-medium text-white mb-2">
                  Current Lighting System
                </label>
                <input
                  type="text"
                  id="currentSystem"
                  name="currentSystem"
                  value={formData.currentSystem}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0c] border border-[#1f1f24] rounded-lg px-4 py-3 text-white placeholder-[#71717a] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition-all"
                  placeholder="e.g., ETC Paradigm, Lutron, etc."
                />
              </div>

              {/* Comfort Level */}
              <div>
                <label htmlFor="comfortLevel" className="block text-sm font-medium text-white mb-2">
                  Comfort with hardware assembly <span className="text-red-500">*</span>
                </label>
                <select
                  id="comfortLevel"
                  name="comfortLevel"
                  value={formData.comfortLevel}
                  onChange={handleChange}
                  className={`w-full bg-[#0a0a0c] border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition-all ${
                    errors.comfortLevel ? 'border-red-500' : 'border-[#1f1f24]'
                  }`}
                >
                  <option value="">Select comfort level</option>
                  <option value="yes">Yes, comfortable with DIY assembly</option>
                  <option value="somewhat">Somewhat, may need guidance</option>
                  <option value="no">No, prefer pre-assembled solutions</option>
                </select>
                {errors.comfortLevel && (
                  <p className="mt-1 text-sm text-red-500">{errors.comfortLevel}</p>
                )}
              </div>

              {/* Goals */}
              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-white mb-2">
                  What are you hoping Aether DMX will solve for you?
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-[#0a0a0c] border border-[#1f1f24] rounded-lg px-4 py-3 text-white placeholder-[#71717a] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] transition-all resize-none"
                  placeholder="Tell us about your lighting challenges..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Apply for Private Beta'
                )}
              </button>

              <p className="text-xs text-[#71717a] text-center">
                By submitting, you agree to receive occasional updates about Aether DMX.
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}