import { Link, NavLink } from 'react-router-dom'

const navLinkBase =
  'text-xs sm:text-sm font-medium tracking-wide text-slate-200/80 hover:text-white transition-colors'

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <nav className="container-layout flex items-center justify-between py-3 sm:py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-slate-950 shadow-md shadow-sky-500/40">
            HP
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.18em] text-slate-50">
              HELIXPEPTIDES
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400">
              RESEARCH GRADE
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? 'text-white' : ''}`
              }
            >
              Home
            </NavLink>
            <a href="#catalogue" className={navLinkBase}>
              Catalogue
            </a>
            <a href="#education" className={navLinkBase}>
              Education
            </a>
            <a href="#testimonials" className={navLinkBase}>
              Clinics
            </a>
          </div>
          <button className="btn-secondary hidden sm:inline-flex">
            <span>Book a demo</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

