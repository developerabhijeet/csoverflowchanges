
import { createStore,combineReducers, compose, applyMiddleware  } from "redux";
import thunk from "redux-thunk";
import Cookie from 'js-cookie';
import { postDetailsReducer } from '../components/reducers/ProductReducers';
const cartItems = Cookie.getJSON("cartItems") || [];
const initialState={cart:{cartItems}};
const reducer = combineReducers({
    postDetails :postDetailsReducer
})
const composeEnhancer=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;