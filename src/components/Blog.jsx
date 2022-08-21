import React from 'react'
import { titleFilter, articlesNameFilter, articlesCategoryFilter } from '../store/blogs/actions'
import { useDispatch } from 'react-redux'
const Blog = ({ blog }) => {
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={blog.img} alt="" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <span
              className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer"
              onClick={() => dispatch(articlesCategoryFilter(blog.category))}
            >
              {blog.category}
            </span>
          </p>
          <div className="block mt-1 cursor-pointer">
            <p
              className="text-xl font-semibold text-gray-900"
              onClick={() => dispatch(titleFilter(blog.title))}
            >
              {blog.title}
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => dispatch(articlesNameFilter(blog.author.name))}
          >
            <img className="h-10 w-10 rounded-full" src={blog.author.img} alt="" />
          </div>
          <div className="ml-3">
            <p
              className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
              onClick={() => dispatch(articlesNameFilter(blog.author.name))}
            >
              {blog.author.name}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime="2020-03-16">{blog.createdAt}</time>
              <span aria-hidden="true">·</span>
              <span> {blog.read} min read </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
