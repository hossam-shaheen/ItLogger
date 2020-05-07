import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
/*
const initialState = {};

const middleware = [thunk];
*/
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
