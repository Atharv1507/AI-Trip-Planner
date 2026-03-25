import { NavLink } from 'react-router-dom'

export default function Navbar({ onMenuClick, hideMenu }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          {!hideMenu && (
            <button
              type="button"
              aria-label="Open sidebar"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:hover:bg-slate-900"
              onClick={onMenuClick}
            >
              <span className="block h-0 w-0 overflow-hidden">Menu</span>
              <div className="space-y-1">
                <div className="h-0.5 w-5 bg-slate-700 dark:bg-slate-200" />
                <div className="h-0.5 w-5 bg-slate-700 dark:bg-slate-200" />
                <div className="h-0.5 w-5 bg-slate-700 dark:bg-slate-200" />
              </div>
            </button>
          )}

          <NavLink
            to="/dashboard"
            className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50"
          >
            AI Travel Planner
          </NavLink>
        </div>

        <nav className="hidden items-center gap-2 sm:flex">
          <NavLink
            to="/profile"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            Profile
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

