import React,{ useRef, useEffect } from 'react'
import { useInView } from 'framer-motion'
import letterScrambler from './function components/letterScrambler'
import InfiniteScroll from './InfiniteScroll';

export default function LetTheGamesBegin() {

  const headingRef = useRef(null);
  const isInViewLocal = useInView(headingRef, { once: true });

    // scramble letter effect
    useEffect(() => {
      if (isInViewLocal) {
        let element = headingRef.current;
        letterScrambler(element);
      }
    }, [isInViewLocal])

  return (
    <div className="h-screen bg-[#fafcfb]">
      <h1 id="the-good-part" className="text-4xl med:text-5xl big:text-5xl font-title font-bold pt-[3rem] text-center underline text-emerald-950">
        <a data-value="LET THE GAMES BEGIN" ref={headingRef} href="https://open.spotify.com/track/2pwnEzgIzYL4AOw4ousjkB?si=b7e3ad260f814d97" target="_blank">
          LET THE GAMES BEGIN
        </a>
      </h1>
      <div className="my-10">
        <InfiniteScroll info={{content: "Little Potato • ", direction: "r"}}/>
        <div className="[&_img]:w-[20%] flex justify-evenly my-8">
          <img data-aos="fade-right" src="/placeholder.jpg" />
          <img src="/placeholder.jpg" />
          <img src="/placeholder.jpg" />
          <img src="/placeholder.jpg" />
        </div>
        <InfiniteScroll info={{content: "小土豆 • ", direction: "l"}}/>
      </div>
    </div>
  )
}
