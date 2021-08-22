import React from 'react';

export default function Footer() {
  return (
    <div data-testid="footer" className="footer pt-4">
      <ul className="flex justify-center py-3 bg-gray-100">
        <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><p className="text-black underline text-small">2021</p></li>
        <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><p className="text-black underline text-small">Stockbit Test</p></li>
        <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><p className="text-black underline text-small">OMDB</p></li>
      </ul>
    </div>
  )
}