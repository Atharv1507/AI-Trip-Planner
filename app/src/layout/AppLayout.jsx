import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/create-trip', label: 'Create Trip' },
  { to: '/profile', label: 'Profile' },
]

function isAuthRoute(pathname) {
  return pathname === '/login' || pathname === '/signup'
}

export default function AppLayout() {
  const location = useLocation()
  const authRoute = isAuthRoute(location.pathname)

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-dvh bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <Navbar onMenuClick={() => setSidebarOpen(true)} hideMenu={authRoute} />

      <div className="flex">
        <aside className="hidden lg:block">
          {!authRoute && <Sidebar items={NAV_ITEMS} variant="desktop" />}
        </aside>

        <main className="flex-1">
          <Outlet />
        </main>
      </div>

      {!authRoute && (
        <Sidebar
          items={NAV_ITEMS}
          variant="mobile"
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}

