import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import d6App from './reducers'
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';

let store = createStore(d6App)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker()




