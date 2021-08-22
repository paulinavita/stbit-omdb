import React, { useState } from "react";
import Popup from "./Popup";

export default function Card(props) {
  const { Poster, Title, Year, imdbID } = props.movie
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
    {
      isPopupOpen
        ? <Popup data-testid="popup-card-open" data={props.movie} handleClose={() => setIsPopupOpen(false)}/>
        : null
    }
    <div data-testid="list-card" className="card-item wrapper bg-gray-400 antialiased text-gray-900">
      <div>
        <img data-testid='popup-card' onClick={() => setIsPopupOpen(true)} src={Poster} alt="" className="w-full object-cover object-center rounded-lg shadow-md" />
        <div className="relative px-4 -mt-16  ">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-baseline">
            <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
            {Year}
        </span>
          </div>
          <section data-testid="section-gotodetail" onClick={() => props.handleClick(imdbID)} >
            <h4 className="mt-1 font-sans text-xl font-semibold uppercase leading-tight truncate">{Title}</h4>
            <div className="mt-1">
              Find Out More
              <span className="text-gray-600 text-sm"></span>
            </div>
          </section>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}
