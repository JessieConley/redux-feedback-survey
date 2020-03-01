import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

 // TODO - set feedback with data from server with reducers for each component

const feelingReducer = (state = [], action) => {
if(action.type === 'FEEL_ANSWER'){
    return state = action.payload;
}
if (action.type === "NEW_FEEDBACK") {
  state = '';
  return state;
}
return state
}

const understandingReducer = (state = '', action) => {
  if (action.type === "UNDERSTAND_ANSWER") {
    return state = action.payload;
  }
  if (action.type === "NEW_FEEDBACK") {
    state = '';
    return state;
  }
  return state;
};

const supportedReducer = (state = '', action) => {
  if (action.type === "SUPPORTED_ANSWER") {
    return state = action.payload;
  }
  if (action.type === "NEW_FEEDBACK") {
    state = '';
    return state;
  }
  return state;
};

const commentsReducer = (state = '', action) => {
  if (action.type === "COMMENTS_ANSWER") {
    return state = action.payload;
  }
  if (action.type === "NEW_FEEDBACK") {
    state = '';
    return state;
  }
  return state;
};

 
const reduxStore = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportedReducer,
    commentsReducer
  }),
  applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
