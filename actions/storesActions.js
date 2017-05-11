import actionTypes from './actionTypes'
import StoreApi from '../api/storesApi'

export const addStore = store => dispatch => {
  return StoreApi.addStore(store)
    .then(res => {
      // on sucess dispatch call and redirect
      // dispatch(saveStore(res))

      console.log('response from server')
      console.log(res)

      // redirect affter save
    })
    .catch(err => {
      //Show an error to user by calling another action creater from this action creator
      // dispatch(authError('Incorrect Login info'));
    })
}

export const saveStore = store => {
  return {
    type: actionTypes.SAVE_STORE,
    store
  }
}
