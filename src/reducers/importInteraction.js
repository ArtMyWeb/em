export const setImporting = (state, { val }) => ({
  importing: val
})
export const setImportingCompleted = (state, { val }) => ({
  importingCompleted: val
})
export const setImportingCurrentItem = (state, { num }) => ({
  importingCurrentItem: num
})
export const setImportingItemsLength = (state, { n }) => ({
  importingItemsLength: n
})
