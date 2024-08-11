import React, { useRef, useState, useEffect } from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'; // https://react-scroll-parallax.damnthat.tv/docs/intro

export default function HowDidWeGetHere() {

  const styling = "text-[22vw] font-PTSansNarrow tracking-widest font-bold text-nowrap";

  return (
    <div className="h-[200vh] bg-bg-primary overflow-hidden flex flex-col items-start justify-between">
      <Parallax
        translateY={[-70, 70]}
        translateX={[300, -100]}
      >
        <h1 className={styling + " text-heading-primary"}>HOW</h1>
      </Parallax>
      <Parallax
        translateY={[-70, 80]}
        translateX={[300, -200]}
      >
        <h1 className={styling + " text-emerald-950"}>DID WE</h1>
      </Parallax>
      <Parallax
        translateY={[-70, 90]}
        translateX={[250, -300]}
      >
        <h1 className={styling + " text-emerald-900"}>GET HERE ?</h1>
      </Parallax>
    </div>
  )
}
