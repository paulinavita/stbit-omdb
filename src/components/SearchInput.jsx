import React from 'react';

export default function SearchInput ({ value, onChange, onClick }) {
  return (
  <div className="w-full px-3 mb-6 md:mb-0">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      FIND YOUR FAVORITE MOVIE
    </label>
    <div className="flex">
      <input
        value={value} 
        onChange={onChange}
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Type movie name"
      />
      <button 
        onClick={onClick}
        className="ml-2 bg-transparent hover:bg-black text-grey-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
        Search
      </button>
    </div>
  </div>
  )
};
