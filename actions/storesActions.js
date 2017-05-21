import actionTypes from './actionTypes'
import StoreApi from '../api/storesApi'

export const getTagsList = tag => async (dispatch, getState) => {
  try {
    const data = await StoreApi.getTagList(tag)
    dispatch(loadTagListSuccess(data))
    return data
  } catch (e) {
    throw e
  }
}

export const getSingleStore = slug => async (dispatch, getState) => {
  let state = getState()

  // if nothing is there make api call and then return single store
  if (state.stores.length === 0) {
    try {
      const store = await StoreApi.getSingleStore(slug)
      dispatch(loadSingleStoreSuccess(store))
      return store[0]
    } catch (e) {
      throw e
    }
  }

  // return first item from the array that is filtered
  return state.stores.filter(store => store.slug === slug)[0]
}

export const getStores = () => (dispatch, getState) => {
  const state = getState()

  if (state.stores.length > 1) {
    console.log('stores cached')
    dispatch(loadStoresSuccess(state.stores))
    return
  }

  return StoreApi.getStores()
    .then(stores => {
      dispatch(loadStoresSuccess(stores))
    })
    .catch(e => {})
}

export const addStore = store => dispatch => {
  return StoreApi.addStore(store)
    .then(res => {
      /*
        On sucess dispatch call and redirect
      */
      // toastr.success('Saved', 'Store Saved Successfully!')
      // Router.push(`/store?params=${res.slug}`, `/store/${res.slug}`)

      dispatch(saveStore(res))

      return res
    })
    .catch(err => {
      // SET 1
      // toastr.error('Error:', err)

      // SET 2
      throw err
    })
}

export const updateStore = store => dispatch => {
  return StoreApi.updateStore(store)
    .then(res => {
      /*
        On sucess dispatch call
      */
      dispatch(updateStoreSuccess(res))
      return res
    })
    .catch(err => {
      // SET 1
      // toastr.error('Error:', err)

      // SET 2
      throw err
    })
}

export const loadTagListSuccess = data => {
  return {
    type: actionTypes.LOAD_TAG_LIST_SUCCESS,
    data
  }
}

export const saveStore = store => {
  return {
    type: actionTypes.SAVE_STORE,
    store
  }
}

export const updateStoreSuccess = store => {
  return {
    type: actionTypes.UPDATE_STORE_DATA,
    store
  }
}

export const loadStoresSuccess = stores => {
  return {
    type: actionTypes.LOAD_STORES_SUCCESS,
    stores
  }
}

export const loadSingleStoreSuccess = store => {
  return {
    type: actionTypes.LOAD_SINGLE_STORE_SUCCESS,
    store
  }
}

export const loadForm = store => {
  return {
    type: actionTypes.LOAD_STORE_DATA,
    store
  }
}
