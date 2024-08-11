import React, {useEffect, useState} from 'react'

export default function InfiniteScroll({ info }) {

  const style = "flex items-center justify-center md:justify-start " +
    "[&_li]:mx-2 [&_li]:text-2xl [&_li]:font-content [&_li]:text-nowrap "
    + "animate-infinite-scroll-" + info.direction;

  const [longArr, setLongArr] = useState([]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < 15; i++) {
      temp.push(i);
    }
    setLongArr(temp);
  }, [])

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden
    [mask-image:_linear-gradient(to_right,transparent_0,_black_256px,_black_calc(100%-256px),transparent_100%)]">
      <ul className={style}>
        {longArr.map((index) => (
          <li key={index}>{info.content}</li>
        ))}
      </ul>
      <ul className={style} aria-hidden="true">
        {longArr.map((index) => (
          <li key={index}>{info.content}</li>
        ))}
      </ul>
  </div>
  )
}
