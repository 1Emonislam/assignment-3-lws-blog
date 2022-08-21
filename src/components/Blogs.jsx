import React from 'react'
import Blog from './Blog'
import { useSelector, useDispatch } from 'react-redux'
import { articlesClearFilter } from '../store/blogs/actions'
const Blogs = () => {
  const dispatch = useDispatch()
  const blogs = useSelector((state) => state.blogs.articles)
  return (
    <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            ALL BLOGS ARE HERE
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus
            atque, ducimus sed.
          </p>
        </div>
        {/* card grid  */}
        <p
          className="text-right pr-5 cursor-pointer bg-red-500 w-32 text-white hover:bg-red-400 w-32 hover:text-white-400 py-1 rounded ml-auto"
          onClick={() => dispatch(articlesClearFilter())}
        >
          Clear Filter
        </p>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {/* single card  */}

          {blogs?.length !== 0 ? (
            blogs?.map((blog) => <Blog key={blog.id} blog={blog} />)
          ) : (
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Emty Blogs 404
            </h2>
          )}
        </div>
      </div>
    </section>
  )
}

export default Blogs
