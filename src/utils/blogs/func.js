export function filterByTitle(arr, title) {
  return arr.filter(
    (item) =>
      item.title.toString().trim().toLowerCase() === title.toString().trim().toLowerCase(),
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
