import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header className="fixed top-0 z-10 w-full border-b bg-background">
        <nav className="mx-auto flex h-14 w-full max-w-screen-xl items-center"></nav>
      </header>
      <main className="mx-auto w-full max-w-screen-xl">
        <Outlet />
      </main>
    </>
  )
}
