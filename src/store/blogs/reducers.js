import {
  filterByAuthor,
  filterByCategory,
  filterBySearch,
  filterByTitle,
} from '../../utils/blogs/func'
import {
  CATEGORY_FILTER,
  TITLE_FILTER,
  CLEAR_FILTER,
  NAME_FILTER,
  SEARCH_FILTER,
} from './actionTypes'
import blogInitState from './initState'

const blogReducer = (state = blogInitState, action) => {
  switch (action.type) {
    case TITLE_FILTER:
      return {
        ...state,
        articles: filterByTitle(blogInitState.articles, action.payload),
      }
    case NAME_FILTER:
      return {
        ...state,
        articles: filterByAuthor(blogInitState.articles, action.payload),
      }
    case CATEGORY_FILTER:
      return {
        ...state,
        articles: filterByCategory(blogInitState.articles, action.payload),
      }
    case SEARCH_FILTER:
      return {
        ...state,
        articles: filterBySearch(blogInitState.articles, action.payload),
      }
    case CLEAR_FILTER:
      return action.payload
    default:
      return state
  }
}
export default blogReducer
