import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header className="bg-light border-line fixed top-0 z-10 w-full border-b">
        <nav className="mx-auto flex h-16 w-full max-w-screen-xl items-center">
          <span className="font-semibold">Doxic Spawn</span>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-screen-xl">
        <Outlet />
      </main>
    </>
  )
}
