'use strict'

import { createStore } from "redux"

export default class Store {
  constructor (Reducer) {
    this.reducer = Reducer
  }

  createInstance (middleware) {
    if (middleware && typeof middleware === 'function') {
      return createStore(this.reducer, middleware)
    }
    return createStore(this.reducer)
  }
}
