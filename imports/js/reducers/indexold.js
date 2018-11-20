
//var combineReducers = require('combine-reducers');

//import rootReducer from './articles.js'

//import employeeReducer from './employeereducer'
​import { ADD_ARTICLE } from "../constants/action-types";
const initialState = {
  articles: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

/*
export default combineReducers({
  rootReducer
 // employeeReducer
})



*/

