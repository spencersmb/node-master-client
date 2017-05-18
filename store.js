import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { todosReducer } from './reducers/todosReducer'
import { storeReducer } from './reducers/storeReducer'
import { reducer as formReducer } from 'redux-form'
import { authReducer } from './reducers/authReducer'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { editStoreReducer } from './reducers/editStoreReducer'
import { tagsReducer } from './reducers/tagsReducer'

export const initStore = (initialState = {}) => {
  // mirror of state from original app
  const reducers = combineReducers({
    todos: todosReducer,
    user: authReducer,
    stores: storeReducer,
    form: formReducer,
    editingStore: editStoreReducer,
    filtered: tagsReducer,
    toastr: toastrReducer
  })

  let env = process.env.NODE_ENV || 'development'

  if (typeof window !== 'undefined' && env === 'development') {
    return createStore(
      reducers,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
  }

  return createStore(reducers, initialState, applyMiddleware(thunkMiddleware))
}
