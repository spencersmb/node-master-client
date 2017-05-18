import _ from 'lodash'
import FormData from 'form-data'

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
  if (!store.hasOwnProperty('tags')) {
    return store
  }

  const tags = Object.keys(store.tags)

  // Convert tags to array
  return Object.assign({}, store, { tags: tags })
}

export const convertToFormData = store => {
  const formData = new FormData()

  for (const key in store) {
    switch (true) {
      // check that the key is not a string incase user already has a photo - dont update it
      case key === 'photo' && typeof store[key] !== 'string':
        formData.append(key, store[key][0])
        break

      case key === 'tags' && store['tags'].length > 0:
        store.tags.forEach(tag => {
          formData.append(key, tag)
        })
        break

      default:
        formData.append(key, store[key])
    }
  }

  return formData
}
