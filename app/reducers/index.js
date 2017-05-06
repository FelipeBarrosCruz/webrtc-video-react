'use strict'

import { combineReducers } from 'redux'
import UserReduce from './src/UserReducer'

export default combineReducers({
  user: UserReduce
})
