import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import searchImg from '../assets/search.svg'
import { articlesSearchFilter } from '../store/blogs/actions'
const Search = () => {
  const dispatch = useDispatch()
  const debounce = (func, delay) => {
    let timer
    return function (...args) {
      const context = this
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null
        func.apply(context, args)
      }, delay)
    }
  }
  const handleSearch = (value) => {
    //dispatching debouncer
    dispatch(articlesSearchFilter(value))
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const optimizedFn = useCallback(debounce(handleSearch, 500), [])
  return (
    <>
      <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
        <input
          onChange={(e) => optimizedFn(e.target.value)}
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
