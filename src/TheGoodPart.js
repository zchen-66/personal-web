import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import useWindowDimensions from './useWindowDimensions'
import letterScrambler from './letterScrambler'
import Accomplishment from './Accomplishment'
import accomplishments from "./accomplishments.json"
import { useGoodPartInViewContext } from './goodPartInViewContext';

export default function TheGoodPart() {

  const sectionWidth = 400;
  const headingRef = useRef(null);
  const { setIsGoodPartInView } = useGoodPartInViewContext();
  const isInViewLocal = useInView(headingRef, { once: true });
  const { height, width } = useWindowDimensions();
  // https://www.youtube.com/watch?v=hjbxaYTMhy0&ab_channel=TomIsLoading

  const [sectionMappingArray, setSectionMappingArray] = useState([]);
  const [numSections, setNumSections] = useState(Math.max(Math.min(Math.floor(width / sectionWidth), 3), 1));
  const [countingArr, setCountingArr] = useState([]);

  // scramble letter effect
  useEffect(() => {
    if (isInViewLocal) {
      let element = headingRef.current;
      letterScrambler(element);
      setIsGoodPartInView(true);
    }
  }, [isInViewLocal])

  // Extract accomplishment info from json file
  let [info] = useState(accomplishments);
  info = info.accomplishments;

  // update gallery dynamically with screen width
  useEffect(() => {

    // Calculate the number of sections based on the window width
    setNumSections(Math.max(Math.min(Math.floor(width / sectionWidth), 3), 1));
    // console.log(width, sectionWidth, Math.floor(width / sectionWidth), numSections);

    // create sectionMappingArray
    let tempArr = Array(numSections).fill().map((_, index) => index);
    setSectionMappingArray(tempArr);

    // create 012 array
    tempArr = Array(3).fill().map((_, index) => index);
    setCountingArr(tempArr);
  }, [width]);


  return (
    <div className="h-full bg-white flex flex-col items-center">
      <h1 id="the-good-part" className="text-4xl med:text-5xl big:text-5xl font-title font-bold pt-[3rem] text-center underline">
        <a data-value="THE GOOD PART" ref={headingRef} href="https://open.spotify.com/track/44B9xspO3RycWjEJ3D8cKl?si=d9fcc131d63049a3" target="_blank">
          THE GOOD PART
        </a>
      </h1>
      <h2 className="text-xl font-content text-neutral-500 mt-4">pls hire me #OpenToWork</h2>
      <div id="goodPartSection" className="w-[95%] pt-[2rem] flex justify-between">
        {sectionMappingArray.map((index) => (
          <section className="smol:w-[100%] med:w-[48%] big:w-[31%]" key={index} id={`section${index}`}>
            {countingArr.map((count => (
              <Accomplishment key={(count * numSections) + index} displayInfo={info[(count * numSections) + index]} />
            )))}
          </section>
        ))}
      </div>
    </div>
  )
}
