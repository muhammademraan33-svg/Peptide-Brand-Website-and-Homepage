const testimonials = [
  {
    name: 'North Coast Performance Clinic',
    role: 'Sports Medicine & Rehab',
    quote:
      'HelixPeptides has allowed us to present peptide-based protocols with clarity and confidence. The UX mirrors the way we think about athlete journeys.',
  },
  {
    name: 'Verde Longevity Lab',
    role: 'Longevity & Metabolic Health',
    quote:
      'The catalogue layout makes it easy for our team to walk clients through complex stacks. Every product page feels like a mini consult.',
  },
  {
    name: 'InnerShift Psychology',
    role: 'Mind-Body Practice',
    quote:
      'We finally have a way to showcase neuroscience-focused compounds without overwhelming clients. Calm, clean and utterly professional.',
  },
] as const

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-y border-white/5 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950/95 py-14 sm:py-20"
    >
      <div className="container-layout">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <p className="chip mb-4">Trusted by modern clinics</p>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Built for teams who live at the frontier of performance medicine.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Use the site to frame protocols, share educational content and keep your
              product story aligned with your clinical standards.
            </p>
          </div>
          <div className="grid flex-1 gap-4 sm:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="relative flex flex-col justify-between rounded-2xl border border-white/8 bg-slate-900/60 p-4 text-sm text-slate-200 shadow-[0_18px_60px_rgba(15,23,42,0.9)]"
              >
                <p className="mb-4 text-[13px] leading-relaxed text-slate-200">
                  “{t.quote}”
                </p>
                <figcaption className="mt-auto">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-slate-400">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

