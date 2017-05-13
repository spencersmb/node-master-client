import actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export const editStoreReducer = (state = initialState.editingStore, action) => {
  switch (action.type) {
    case actionTypes.LOAD_STORE_DATA:
      return Object.assign({}, state, {
        data: action.store
      })
    default:
      return state
  }
}
