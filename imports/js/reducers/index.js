//var combineReducers = require('combine-reducers');
import { combineReducers } from 'redux'

import rootReducer from './articles'
import employeeReducer from './employeereducer'

export default combineReducers({
  rootReducer,
  employeeReducer
})