import { createStore } from 'redux'
import initialState from 'store/initialState'

import app from 'components/app/actions'

const actions = {
  ...app
}

export default createStore(
  (state = initialState, { type, payload }) => {
    return actions[type] ? actions[type](state, payload) : state
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)
