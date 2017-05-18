import actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export const tagsReducer = (state = initialState.filtered, action) => {
  switch (action.type) {
    case actionTypes.LOAD_TAG_LIST_SUCCESS:
      const [tags, stores] = action.data
      return Object.assign({}, state.tags, {
        tags: tags,
        stores: stores
      })

    default:
      return state
  }
}
