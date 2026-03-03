import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { ProductCard } from '../components/ProductCard'
import { NewsletterSection } from '../components/Newsletter'
import { TestimonialsSection } from '../components/Testimonials'
import { featuredProducts, products } from '../data/products'

export function Homepage() {
  const heroPrimary = featuredProducts[0] ?? products[0]

  const categories = Array.from(
    new Set(products.map((p) => p.category)),
  ).sort() as string[]

  return (
    <div className="homepage-gradient min-h-screen">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="border-b border-white/10 pb-12 pt-10 sm:pt-14">
          <div className="container-layout grid gap-10 lg:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] lg:items-center">
            <div>
              <p className="chip mb-4">
                New • Peptide storefront experience for modern clinics
              </p>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                A clean, clinical-grade home for your peptide catalogue.
              </h1>
              <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-200">
                HelixPeptides™ is a conversion-focused front-end for peptide brands and
                clinics. Structured storytelling, high-impact product visuals and
                frictionless navigation – built to feel as considered as your protocols.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link to="#catalogue" className="btn-primary">
                  Browse peptide catalogue
                </Link>
                <button className="btn-secondary">
                  View product demo flow
                </button>
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-5 text-xs sm:text-sm text-slate-200/90 md:grid-cols-3">
                <div>
                  <dt className="font-semibold text-slate-50">Built for scale</dt>
                  <dd className="mt-1 text-slate-300">
                    Shopify / WooCommerce ready IA, with filters and merchandising baked
                    in.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-50">SEO-first</dt>
                  <dd className="mt-1 text-slate-300">
                    Semantic markup, clean URLs and content blocks for protocol guides.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-50">Hand-off ready</dt>
                  <dd className="mt-1 text-slate-300">
                    Simple content model so your team can own copy, imagery and inventory.
                  </dd>
                </div>
              </dl>
            </div>

            {/* Hero product spotlight */}
            <aside className="relative">
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.25rem] bg-gradient-to-tr from-sky-500/25 via-indigo-500/20 to-emerald-400/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/12 bg-slate-950/80 p-4 shadow-[0_26px_120px_rgba(15,23,42,0.95)] sm:p-5">
                <header className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300/90">
                      Hero product
                    </p>
                    <h2 className="mt-1 text-sm font-semibold text-white sm:text-base">
                      {heroPrimary.name}
                    </h2>
                    <p className="mt-1 max-w-xs text-[11px] text-slate-300">
                      {heroPrimary.heroClaim}
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-200 ring-1 ring-emerald-400/60">
                    Highest clicked
                  </span>
                </header>

                <div className="mt-4 grid gap-4 sm:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] sm:items-center">
                  <div className="relative h-40 overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/90 sm:h-44">
                    <img
                      src={heroPrimary.image}
                      alt={heroPrimary.name}
                      className="h-full w-full object-contain object-center"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-sky-400/25 via-transparent to-fuchsia-400/25 mix-blend-screen" />
                  </div>
                  <div className="space-y-2">
                    <ul className="space-y-1.5 text-[11px] text-slate-200">
                      {heroPrimary.benefits.slice(0, 3).map((benefit) => (
                        <li key={benefit} className="flex items-start gap-1.5">
                          <span className="mt-[5px] h-1 w-3 rounded-full bg-sky-400" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/product/${heroPrimary.slug}`}
                      className="btn-secondary mt-2 inline-flex rounded-full border-sky-400/60 bg-sky-500/10 px-4 py-1.5 text-[11px] font-semibold text-sky-100"
                    >
                      Open product detail
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Catalogue */}
        <section
          id="catalogue"
          className="border-b border-white/8 bg-slate-950/80 py-12 sm:py-16"
        >
          <div className="container-layout space-y-8">
            <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="chip mb-3">Peptide catalogue</p>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  Structured by category, designed for conversion.
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-300">
                  Each product card mirrors your eventual PDP: clear positioning, primary
                  benefits and a single, obvious call-to-action into protocol detail.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-300">
                <span className="rounded-full bg-slate-900/70 px-3 py-1 font-semibold text-slate-100">
                  {products.length} peptides
                </span>
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </header>

            <div className="grid gap-4 md:grid-cols-2">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Education strip */}
        <section
          id="education"
          className="border-b border-white/8 bg-slate-950 py-12 sm:py-16"
        >
          <div className="container-layout grid gap-8 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] md:items-center">
            <div>
              <p className="chip mb-3">Education blocks</p>
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Turn complex science into clear, skimmable protocol stories.
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Inner pages are structured like lightweight clinical notes: a single
                primary claim, a short story, then scannable sections for benefits,
                protocols, warnings and stack logic.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>
                    Use these blocks as a blueprint for Shopify product descriptions or
                    WordPress &ldquo;Protocol Guide&rdquo; posts.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>
                    Heading hierarchy and copy length are tuned for both scanners and deep
                    readers.
                  </span>
                </li>
              </ul>
            </div>
            <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/70 p-5 text-sm text-slate-200">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Inner-page modules
                </p>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] text-slate-200">
                  Protocol summary • FAQ • Safety
                </span>
              </div>
              <p>
                Think of each inner page as a mini landing page that can live inside your
                e-commerce platform. You can translate this layout into a Shopify product
                template, a WooCommerce tab set or a WordPress block pattern with no extra
                design work.
              </p>
              <p className="text-[11px] text-slate-400">
                The build is intentionally opinionated: clean type, generous white space
                and a focus on a single primary CTA.
              </p>
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <NewsletterSection />

        {/* Footer */}
        <footer className="border-t border-white/10 bg-slate-950 py-8 text-xs text-slate-400">
          <div className="container-layout flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} HelixPeptides™. For research and educational
              framing only.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span>Conversion-focused peptide storefront design.</span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-500 sm:inline-block" />
              <span>Ready to port into Shopify, WooCommerce or WordPress.</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

