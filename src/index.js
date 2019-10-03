import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import './index.css';
import d6App from './reducers'
import {load} from './actions'
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';

let store = createStore(d6App, applyMiddleware(thunk))
store.dispatch(load())
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker()




