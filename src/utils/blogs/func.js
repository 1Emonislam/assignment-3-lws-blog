export function filterByTitle(arr, title) {
  return arr.filter(
    (item) => item.title.toString().trim().toLowerCase() === title.toString().trim().toLowerCase(),
  )
}
export function filterByCategory(arr, category) {
  return arr.filter(
    (item) =>
      item.category.toString().trim().toLowerCase() === category.toString().trim().toLowerCase(),
  )
}

export function filterByAuthor(arr, name) {
  return arr.filter(
    (item) =>
      item.author.name.toString().trim().toLowerCase() === name.toString().trim().toLowerCase(),
  )
}

export function filterBySearch(arr, search) {
  return arr.filter(
    (item) =>
      item.title.toLowerCase()?.includes(search?.toLowerCase()) ||
      item.author.name.toLowerCase()?.includes(search?.toLowerCase()) ||
      item.category.toLowerCase()?.includes(search?.toLowerCase()),
  )
}
