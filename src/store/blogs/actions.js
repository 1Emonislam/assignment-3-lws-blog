import {
  CATEGORY_FILTER,
  CLEAR_FILTER,
  NAME_FILTER,
  SEARCH_FILTER,
  TITLE_FILTER,
} from './actionTypes'
import blogInitState from './initState'

export const titleFilter = (title) => {
  return {
    type: TITLE_FILTER,
    payload: title,
  }
}
export const articlesNameFilter = (name) => {
  return {
    type: NAME_FILTER,
    payload: name,
  }
}
export const articlesCategoryFilter = (category) => {
  return {
    type: CATEGORY_FILTER,
    payload: category,
  }
}
export const articlesSearchFilter = (search) => {
  return {
    type: SEARCH_FILTER,
    payload: search,
  }
}
export const articlesClearFilter = () => {
  return {
    type: CLEAR_FILTER,
    payload:blogInitState,
  }
}
