import actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export const storeReducer = (state = initialState.stores, action) => {
  switch (action.type) {
    case actionTypes.SAVE_STORE:
      return [...state, action.store]
    case actionTypes.LOAD_STORES_SUCCESS:
      return [...action.stores]
    case actionTypes.UPDATE_STORE_DATA:
      const newState = state.map(store => {
        if (store.id === action.store.id) {
          store = { ...action.store.store }
        }
        return store
      })
      console.log(newState)

      return state

    default:
      return state
  }
}
