import _ from 'lodash'

export const getStoreById = (stores, storeId) => {
  if (stores.length > 0) {
    return stores.filter(store => store._id === storeId)
  }
}

// Convert tags to Object for redux form
export const convertTagsToObject = store => {
  if (store === undefined) {
    return {}
  }

  const storeObj = store[0]
  const oldTagsArray = storeObj.tags

  const tagObject = {}
  oldTagsArray.forEach(tag => {
    const obj = {}
    obj[tag] = true
    _.merge(tagObject, obj)
  })
  return Object.assign({}, storeObj, {
    tags: tagObject
  })
}

export const convertTagsToArray = store => {
  const tags = Object.keys(store.tags)

  // Convert tags to array
  return Object.assign({}, store, { tags: tags })
}
