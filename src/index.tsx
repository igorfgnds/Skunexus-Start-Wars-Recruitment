import React from 'react'
import ReactDOM from 'react-dom'
import { Routers } from './routers'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routers />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
