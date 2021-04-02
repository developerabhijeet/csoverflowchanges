import { createStore,applyMiddleware,combineReducers, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk  from 'redux-thunk';
import userSigninReducer from './reducers/userReducer';
import Cookie from 'js-cookie';
const userInfo = Cookie.getJSON("userInfo")||null;

const initialState = {userSignin:{userInfo}};
const reducer = combineReducers({
  userSignin: userSigninReducer,
})
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_||compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;
