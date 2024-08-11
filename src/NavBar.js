import React, { useEffect, useRef, useState } from 'react'
import VerticalNav from './VerticalNav'
import { useGoodPartInViewContext } from './function components/goodPartInViewContext';
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function NavBar() {

  const { isGoodPartInView } = useGoodPartInViewContext();
  const navRef = useRef(null);

  useEffect(() => {
    if (isGoodPartInView) {
      let nav = navRef.current;
      nav.classList.add("opacity-100");
      nav.classList.remove("h-0");
      nav.classList.add("h-[7.5vh]");
    }
  }, [isGoodPartInView])


  const [catchphrase] = useTypewriter ({
    words: ["Technically Zitong", "Part-Time Notion Nerd", "Gamer.", "AJR Enthusiast"],
    typeSpeed: 100,
    loop: 0
  })

  const [vertNavToggle, setVertNavToggle] = useState(0);

  function displayVerticalNav() {
    if (vertNavToggle !== 2) {
      setVertNavToggle(2);
    } else {
      setVertNavToggle(1);
    }
  }

  return (
    <nav className="fixed top-0 z-10 flex items-center justify-start w-full bg-neutral-100
    bg-opacity-95 shadow-lg border-b border-white px-5
    transform-[height,opacity] duration-[1000ms] h-0 opacity-0" ref={navRef}>
      <div className="flex flex-col items-center justify-center ml-[1vw] w-fit">
        <h1 className="text-2xl font-bold font-title"> &lt;Andrew Chen/&gt; </h1>
        <h2 className="font-content text-black font-bold text-[10pt]">
          &nbsp; {catchphrase}
          <Cursor />
        </h2>
      </div>
      <div className="items-center h-1/3 w-fit mx-2 hidden med:flex">
        <a onClick={() => window.location.replace("/#the-good-part")}
        className="text-xl font-PTSansNarrow text-black px-4 ml-4 mt-2 border-l border-gray-300 cursor-pointer">
          ... Can we skip to the good part?
        </a>
      </div>
      <div className="flex items-center justify-center h-full ml-auto">
        <a href="https://github.com/zchen-66" target="_blank" className="mx-2 hidden med:block">
          <img src="/github-logo.png" alt="github logo" className="w-10"/>
        </a>
        <a href="https://linkedin.com/in/zchen66" target="_blank" className="mx-2 hidden med:block">
          <img src="/linkedin-logo.png" alt="linkedin logo" className="w-10"/>
        </a>
        <a href="#" className="mx-2 mr-5 hidden med:block">
          <img src="/mail-logo.webp" alt="mail logo" className="w-10"/>
        </a>
        <a className="block med:hidden cursor-pointer" onClick={displayVerticalNav}>
          <svg xmlns="http://www.w3.org/2000/svg" height="42" viewBox="0 -960 960 960" width="42" fill="#131313">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
          </svg>
        </a>
      </div>
      <VerticalNav vertNavToggle={vertNavToggle}/>
    </nav>
  )
}
