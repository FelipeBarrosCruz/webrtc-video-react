import { createStore } from "redux"

import reducer from "../reducers"


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
