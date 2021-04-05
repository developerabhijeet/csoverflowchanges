import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postReducer, userReducer } from '../reducers/userAuthReducer';

const middlewares = [thunk]; 

const reducer = combineReducers({
  userLogin: userReducer,
  postProblem: postReducer//for Signup and Login both
});
//getting user from localStorage and save it into our store

const userAuthFromStorage = localStorage.getItem('userAuthData')
? JSON.parse(localStorage.getItem('userAuthData')) : null;

const initialState = {
  userLogin: {userInfo: userAuthFromStorage},
}

const store = createStore(reducer, initialState ,composeWithDevTools(applyMiddleware(...middlewares)));

export default store;