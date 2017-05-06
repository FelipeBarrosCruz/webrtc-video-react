'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Layout from './layout'
import Reducer from './reducers'
import Store from "./store"

const store = new Store(Reducer).createInstance()

ReactDOM.render(<Provider store={store}>
  <Layout />
</Provider>, document.getElementById('app'))
