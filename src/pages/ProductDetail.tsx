import { Link, useParams } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { products } from '../data/products'

export function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-50">
        <Navbar />
        <main className="container-layout flex min-h-[60vh] flex-col items-center justify-center text-center">
          <p className="chip mb-3">Protocol not found</p>
          <h1 className="text-2xl font-semibold text-white">This peptide isn&apos;t live yet.</h1>
          <p className="mt-3 max-w-md text-sm text-slate-300">
            The product you tried to open doesn&apos;t exist or has been archived. Use the
            main catalogue to browse live research compounds.
          </p>
          <Link to="/" className="btn-primary mt-6">
            Back to catalogue
          </Link>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <main className="pb-16 pt-8 sm:pt-10">
        <article className="container-layout grid gap-10 lg:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] lg:items-start">
          <section aria-labelledby="protocol-overview">
            <p className="chip mb-3">{product.category} protocol</p>
            <h1
              id="protocol-overview"
              className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              {product.name}
            </h1>
            <p className="mt-2 text-sm text-slate-300">{product.heroClaim}</p>

            <div className="mt-6 grid gap-4 rounded-3xl border border-white/10 bg-slate-900/70 p-5 text-sm text-slate-200">
              <h2 className="text-sm font-semibold text-white">Positioning</h2>
              <p>{product.description}</p>
              <p className="text-[11px] text-slate-400">
                Use this section as your primary product description inside Shopify or
                WooCommerce. It is written to be pasted directly into a PDP template.
              </p>
            </div>

            <section
              aria-labelledby="key-benefits"
              className="mt-8 grid gap-6 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)]"
            >
              <div>
                <h2
                  id="key-benefits"
                  className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400"
                >
                  Primary benefits
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-slate-100">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span className="mt-[7px] h-1.5 w-4 rounded-full bg-sky-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Protocol notes
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-slate-100/90">
                  {product.protocols.map((protocol) => (
                    <li key={protocol} className="flex items-start gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{protocol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section aria-labelledby="safety" className="mt-8">
              <h2
                id="safety"
                className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400"
              >
                Safety, legality & framing
              </h2>
              <div className="mt-3 space-y-2 rounded-2xl border border-amber-400/40 bg-amber-400/5 p-4 text-xs text-amber-100">
                <p>{product.warning}</p>
                <p>
                  This copy block can be reused across multiple products. In an e-commerce
                  build, we would power it from a single global CMS field and reference it
                  on each PDP.
                </p>
              </div>
            </section>

            <section aria-labelledby="faq" className="mt-8">
              <h2
                id="faq"
                className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400"
              >
                How clinics use this page
              </h2>
              <div className="mt-3 space-y-2 text-sm text-slate-200">
                <p>
                  Use this layout as a talking map during consults. Start with the hero
                  claim, move through 3–4 key benefits, then outline a simple protocol
                  block. Finish by clearly restating safety and regulatory notes.
                </p>
                <p className="text-[11px] text-slate-400">
                  In Shopify, this can become a product template. In WordPress, it can be
                  a &ldquo;Protocol Guide&rdquo; post type with reusable blocks.
                </p>
              </div>
            </section>
          </section>

          {/* Right column: image + quick actions */}
          <aside className="space-y-5 lg:sticky lg:top-20">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-4">
              <div className="relative h-52 overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/90">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-sky-400/15 via-transparent to-fuchsia-400/20 mix-blend-screen" />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 text-xs text-slate-200">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-3 py-1 ring-1 ring-white/15">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  In stock • Batch tracked
                </span>
                <span className="text-[11px] text-slate-400">
                  Swap this for &ldquo;Add to cart&rdquo; in Shopify / WooCommerce.
                </span>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                <button className="btn-primary-sm">
                  Add to protocol plan
                </button>
                <button className="btn-secondary-sm">
                  Download clinic one-pager
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-xs text-slate-300">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Implementation notes
              </h2>
              <p className="mt-2">
                Content here explains to the client&apos;s team how to keep the page
                up-to-date: which sections map to which CMS fields, and what to edit when a
                protocol evolves.
              </p>
            </div>

            <Link
              to="/"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-white/40 hover:bg-slate-800"
            >
              Back to all peptides
            </Link>
          </aside>
        </article>
      </main>
    </div>
  )
}

