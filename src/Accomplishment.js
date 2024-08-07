import React from 'react'
import placeholder from './img/placeholder.jpg'

export default function Accomplishment({ displayInfo }) {

  let dateRange = "JAN 20XX - DEC 20XX";
  let title = "Project";
  let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  let imgPath = placeholder
  if (displayInfo) {
    if (displayInfo.end) {
      dateRange = displayInfo.start + " - " + displayInfo.end;
    } else {
      dateRange = displayInfo.start;
    }
    title = displayInfo.title;
    description = displayInfo.description;
    imgPath = displayInfo.imgPath;
  }

  return (
    <article className="border-t-[1px] border-black border-solid flex flex-col">
      <h2 className="text-2xl font-PTSansNarrow mt-12">{dateRange}</h2>
      <h1 className="text-6xl font-NotoSerif font-light my-5">{title}</h1>
      <p className="text-2xl font-content">{description}</p>
      <img className="my-5" src={imgPath} />
    </article>
  )
}
