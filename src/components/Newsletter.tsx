import { FormEvent, useState } from 'react'

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="newsletter"
      className="py-14 sm:py-20 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"
    >
      <div className="container-layout">
        <div className="grid gap-8 rounded-3xl border border-sky-500/30 bg-sky-500/5 p-6 shadow-[0_22px_80px_rgba(56,189,248,0.35)] sm:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] sm:p-8">
          <div>
            <p className="chip mb-3 bg-sky-500/20 text-[10px] font-semibold uppercase text-sky-100 ring-1 ring-sky-400/50">
              Partner updates
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Be first to see new peptides, protocols and client education.
            </h2>
            <p className="mt-2 text-sm text-sky-100/90">
              Monthly dispatch only – no spam, no clutter. Built for clinicians, coaches and
              operators who care about best-practice peptide workflows.
            </p>
          </div>

          <form
            className="flex flex-col gap-3 sm:items-start"
            onSubmit={handleSubmit}
            aria-label="Newsletter sign up"
          >
            <div className="flex w-full flex-col gap-2 sm:flex-row">
              <label className="flex-1">
                <span className="sr-only">Work email</span>
                <input
                  type="email"
                  required
                  placeholder="you@clinicname.com"
                  className="w-full rounded-full border border-sky-400/50 bg-slate-950/80 px-4 py-2.5 text-sm text-slate-50 shadow-inner shadow-sky-500/20 placeholder:text-sky-200/60 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300/70"
                />
              </label>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Join the dispatch
              </button>
            </div>
            <p className="text-[11px] text-sky-100/80">
              We send once a month. No third-party sharing. You can export this list to
              your clinic CRM at any time.
            </p>
            {submitted && (
              <p className="mt-1 text-[11px] font-medium text-emerald-200">
                You&apos;re in. Check your inbox for our next clinic dispatch.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

