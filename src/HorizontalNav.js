import React from 'react'

export default function HorizontalNav() {
  return (
    <div className="horizontal-nav flex items-center justify-between w-full h-full transition-all duration-1000 ease-in-out">
      <div className="logo-style flex flex-col items-center justify-center ml-4">
        <h1 className="text-2xl font-bold"> &lt;Andrew Chen/&gt; </h1>
        <div id="catchphrase" className="relative whitespace-nowrap">
          <h3 className="text-base font-light text-black border-r-2 border-black pr-1 animate-typing-catchphrase">
            Technically Zitong
          </h3>
        </div>
      </div>
      <div className="tabs-style flex items-center h-1/3 w-1/4 mx-2">
        <a href="#" className="text-xl font-light text-black px-4 py-2 border-r border-gray-300">About</a>
        <a href="#relevant-section-title" className="text-xl font-light text-black px-4 py-2 border-r border-gray-300">Relevant Stuff</a>
        <a href="#" className="text-xl font-light text-black px-4 py-2">Not-So-Relevant Stuff</a>
      </div>
      <div className="links-style flex items-center absolute right-4 whitespace-nowrap">
        <a href="https://github.com/zchen-66" target="_blank" className="mr-2">
          <img src="img/github-logo.png" alt="github logo" className="w-10"/>
        </a>
        <a href="https://linkedin.com/in/zchen66" target="_blank" className="mr-2">
          <img src="img/linkedin-logo.png" alt="linkedin logo" className="w-10"/>
        </a>
        <a href="#" className="mr-2">
          <img src="img/mail-logo.webp" alt="mail logo" className="w-10"/>
        </a>
        <a id="expand-vertical-nav" className="hidden md:block">
          <svg xmlns="http://www.w3.org/2000/svg" height="42" viewBox="0 -960 960 960" width="42" fill="#131313">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
