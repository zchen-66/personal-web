import React from 'react'
import HorizontalNav from './HorizontalNav'
import VerticalNav from './VerticalNav'

export default function NavBar() {
  return (
    <nav className="fixed top-0 z-10 flex items-center justify-start w-full h-[var(--nav-height)] bg-white bg-opacity-90 shadow-lg">
      <HorizontalNav />
      {/* <VerticalNav /> */}
    </nav>
  )
}
