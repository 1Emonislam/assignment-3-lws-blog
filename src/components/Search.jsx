import React from 'react'
import searchImg from '../assets/search.svg'
const Search = () => {
  return (
    <>
      <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
        <input
          className="outline-none border-none bg-gray-50 h-full w-full mr-2"
          type="search"
          name="search"
          placeholder="Search"
        />
        <img className="inline h-6 cursor-pointer" src={searchImg} alt="Search" />
      </div>
    </>
  )
}

export default Search
