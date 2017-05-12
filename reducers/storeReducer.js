import actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export const storeReducer = (state = initialState.stores, action) => {
  switch (action.type) {
    case actionTypes.SAVE_STORE:
      return [...state, action.store]
    case actionTypes.LOAD_STORES_SUCCESS:
      return [...action.stores]

    default:
      return state
  }
}
