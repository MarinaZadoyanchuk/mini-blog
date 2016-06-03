import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { mainReducer } from './reducers'
import App from './containers/app'

let store = createStore(mainReducer, undefined, window.devToolsExtension && window.devToolsExtension())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)