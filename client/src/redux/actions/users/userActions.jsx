//causing change of state in application
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS,USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from './actionTypes';
import axios from 'axios';
const signupuserAction = (name, email, password, bio, jobtitle, tech) => {
  return async dispatch => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST
      })
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post('http://localhost:4000/app/signup', {
        name,
        email,
        password,
        bio,
        jobtitle,
        tech

      },
        config
      );
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data
      });
      //saving user to localstorage
      localStorage.setItem('userAuthData', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

//Login Action 

const loginUserAction = (email,password)=>{
  return async dispatch =>{
    try{
      dispatch({
        type: USER_LOGIN_REQUEST,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post('http://localhost:4000/app/login', {
       
        email,
        password,
       

      },
        config
      );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    console.log(data);
    //saving user to localStorage
    localStorage.setItem('userAuthData', JSON.stringify(data));
   
    }catch(error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

export { signupuserAction, loginUserAction };