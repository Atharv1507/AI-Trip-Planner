import { NavLink } from 'react-router-dom'

export default function Sidebar({ items, variant, isOpen, onClose }) {
  const isMobile = variant === 'mobile'

  const sidebarContent = (
    <div className="flex h-full flex-col">
      <div className="px-4 py-4">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Navigation
        </div>
      </div>

      <ul className="space-y-1 px-2 pb-4">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              onClick={isMobile ? onClose : undefined}
              className={({ isActive }) =>
                isActive
                  ? 'block rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-white'
                  : 'block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900'
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )

  if (!isMobile) {
    return (
      <div className="h-dvh w-64 border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        {sidebarContent}
      </div>
    )
  }

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
        onClick={onClose}
      />

      <div
        className={`fixed left-0 top-0 z-50 h-dvh w-72 transform border-r border-slate-200 bg-white shadow-xl transition-transform duration-200 dark:border-slate-800 dark:bg-slate-950 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </div>
    </>
  )
}

