import { Outlet } from 'react-router-dom'
import { TopBar } from './TopBar'

export function Layout() {
  return (
    <>
      <TopBar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      {/* Footer, WhatsAppButton, ScrollToTop added in Task 9 */}
    </>
  )
}
