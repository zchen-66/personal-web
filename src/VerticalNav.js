import React, { useEffect, useRef } from 'react'

export default function VerticalNav({ vertNavToggle }) {

  const vertNavRef = useRef(null);

  useEffect(() => {
    if (vertNavToggle !== 0) {
      toggleVertNav();
    }
  }, [vertNavToggle]);

  function toggleVertNav() {
    const vertNav = vertNavRef.current;
    vertNav.classList.toggle("flex");
    vertNav.classList.toggle("hidden");
  }

  return (
    <div ref={vertNavRef} className="fixed right-0 top-0 h-full w-screen smol:w-72 bg-neutral-100 bg-opacity-95 hidden flex-col">
      <div className="flex flex-col items-start justify-start mt-5 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50" fill="heading-primary"
        className="cursor-pointer ml-2" onClick={() => {toggleVertNav()}}>
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
        </svg>
      </div>
      <div className="flex flex-col items-start justify-start mt-5 w-full">
        <a onClick={() => window.location.replace("/#the-good-part")}
          className="text-xl font-PTSansNarrow text-black px-4 ml-4 mt-2 cursor-pointer">
            ... Can we skip to the good part?
        </a>
      </div>
      <div className="mt-auto mb-8 w-full flex justify-evenly">
        <a href="https://github.com/zchen-66" target="_blank">
          <img src="/github-logo.png" alt="github logo" className="w-10"/>
        </a>
        <a href="https://linkedin.com/in/zchen66" target="_blank">
          <img src="/linkedin-logo.png" alt="linkedin logo" className="w-10"/>
        </a>
        <img src="/mail-logo.webp" alt="mail logo" className="w-10"/>
      </div>
    </div>
  )
}
