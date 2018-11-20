import {createStore}from "redux";
import {
  combineReducers
} from 'redux-immutable';
var Immutable = require('immutable');


//import combineReducers from "../reducers/index";

import articlesReducer from "../reducers/articles";
import jobsReducer from "../reducers/jobsreducer";
import hourReducer from "../reducers/hourreducer";
import serverHourReducer from "../reducers/serverhourreducer";
import shiftsReducer from "../reducers/shiftsreducer";

import p2aReducer from "../reducers/p2areducer.js"
const initialState = Immutable.Map();

var rootReducer = combineReducers({
    shifts:shiftsReducer,
    hour:hourReducer,
    jobs:jobsReducer,
    serverHour:serverHourReducer,
    p2a:p2aReducer
});

const store = createStore(rootReducer, initialState);
//const store = createStore(employeeReducer);
console.log("This is the store" +store.getState())

export default store;
