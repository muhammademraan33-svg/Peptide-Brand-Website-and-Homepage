import { Link } from 'react-router-dom'
import type { PeptideProduct } from '../data/products'

type Props = {
  product: PeptideProduct
}

export function ProductCard({ product }: Props) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-slate-900/40 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.9)] transition hover:border-sky-400/60 hover:bg-slate-900/80 hover:shadow-[0_24px_80px_rgba(56,189,248,0.35)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300/90">
            {product.category}
          </p>
          <h3 className="mt-1 text-base sm:text-lg font-semibold text-slate-50">
            {product.name}
          </h3>
        </div>
        {product.badge ? (
          <span className="chip bg-emerald-400/10 text-[10px] font-semibold uppercase text-emerald-200 ring-1 ring-emerald-400/40">
            {product.badge}
          </span>
        ) : null}
      </div>

      <p className="mt-2 text-xs sm:text-sm text-slate-300/90">
        {product.tagline}
      </p>

      <div className="mt-4 flex items-center gap-4">
        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain object-center transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-sky-300/5 via-transparent to-sky-500/10 opacity-0 mix-blend-screen transition group-hover:opacity-100" />
        </div>
        <ul className="flex-1 space-y-1.5 text-[11px] text-slate-300/90">
          {product.benefits.slice(0, 3).map((benefit) => (
            <li key={benefit} className="flex items-start gap-1.5">
              <span className="mt-[3px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 pt-3 text-[11px] text-slate-400">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1 ring-1 ring-white/8">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Research-grade | Batch tracked
        </span>
        <Link
          to={`/product/${product.slug}`}
          className="btn-secondary whitespace-nowrap rounded-full border-sky-500/40 bg-sky-500/5 px-4 py-1.5 text-[11px] font-semibold text-sky-200 hover:bg-sky-500/10"
        >
          View protocol
        </Link>
      </div>
    </article>
  )
}

