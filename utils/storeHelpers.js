import _ from 'lodash'

export const getStoreById = (stores, storeId) => {
  if (stores.length > 0) {
    return stores.filter(store => store._id === storeId)
  }
}

export const updateTagsForEditing = store => {
  const oldTagsArray = store.tags
  const tagObject = {}

  oldTagsArray.forEach(tag => {
    const obj = {}
    obj[tag] = true
    _.merge(tagObject, obj)
  })

  return Object.assign({}, store, {
    tags: tagObject
  })
}
