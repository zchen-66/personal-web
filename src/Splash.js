import React, {useRef} from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Splash() {

  const [nameTypewriter] = useTypewriter ({
    words: ["<Andrew Chen/>"],
    typeSpeed: 200,
    onLoopDone: handleLoadWebsite
  })

  const h2Ref = useRef(null);

  function handleLoadWebsite() {
    let subheading = h2Ref.current;
    subheading.classList.add("opacity-40")
    subheading.classList.add("-translate-y-20")
  }

  return (
    <div className="h-screen w-screen bg-bg-primary flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-[10vw] font-title font-light text-heading-primary my-14">
        <span className="font-bold">
          {nameTypewriter}
        </span>
        <Cursor />
      </h1>
      <h2 className="text-[1.7vw] font-title font-bold mt-20 flex items-center
      transition-[transform,opacity] duration-[3000ms] opacity-0 translate-y-50" ref={h2Ref}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000" className="mx-1"><path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"/></svg>
        Scroll to discover Andrew's world
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000" className="mx-1"><path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000" ><path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"/></svg>
      </h2>
    </div>
  )
}
