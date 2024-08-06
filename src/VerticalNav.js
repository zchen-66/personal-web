import React from 'react'

export default function VerticalNav() {
  return (
    <div className="vertical-nav fixed right-0 top-0 h-full w-72 bg-white bg-opacity-90 hidden flex-col md:flex">
      <div className="logo-style flex flex-col items-start justify-start mt-5 w-full">
        <svg id="collapse-vertical-nav" xmlns="http://www.w3.org/2000/svg" height="50" viewBox="http://www.w3.org/2000/svg" width="50" fill="#131313" className="cursor-pointer">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
        </svg>
      </div>
      <div className="tabs-style flex flex-col items-start justify-start mt-5 w-full">
        <a href="#" className="block py-2 px-4 text-base font-light text-black hover:bg-gray-200">About</a>
        <a href="#relevant-section-title" className="block py-2 px-4 text-base font-light text-black hover:bg-gray-200">Relevant Stuff</a>
        <a href="#" className="block py-2 px-4 text-base font-light text-black hover:bg-gray-200">Not-So-Relevant Stuff</a>
      </div>
      <div className="links-style absolute bottom-8 w-full flex justify-evenly">
        <a href="https://github.com/zchen-66" target="_blank">
          <img src="img/github-logo.png" alt="github logo" className="w-10"/>
        </a>
        <a href="https://linkedin.com/in/zchen66" target="_blank">
          <img src="img/linkedin-logo.png" alt="linkedin logo" className="w-10"/>
        </a>
        <img src="img/mail-logo.webp" alt="mail logo" className="w-10"/>
      </div>
    </div>
  )
}
