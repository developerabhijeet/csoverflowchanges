import { USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST } from "../Constants";
import axios from 'axios';
import { Cookie } from 'js-cookie';



const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("http://localhost:8002/app/Login", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
}

const logout = () =>{
  Cookie.remove("userInfo");
  dispatch("type: USER_LOGOUT")
}
export default signin;