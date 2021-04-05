//causing change of state in application
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, POST_REQUEST, POST_SUCCESS, POST_FAIL, USER_EDITPROFILE_FAIL, USER_EDITPROFILE_SUCCESS, USER_EDITPROFILE_REQUEST, USER_LOGOUT_SUCCESS } from './actionTypes';
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

const loginUserAction = (email, password) => {
  return async dispatch => {
    try {
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

    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};


const postAction = (name, post, domain) => {
  return async dispatch => {
    try {
      dispatch({
        type: POST_REQUEST,
      });


      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post('http://localhost:4000/app/post', {

        name,
        post,
        domain,


      },
        config
      ); dispatch({
        type: POST_SUCCESS,
        payload: data,
      });

    } catch (error) {
      dispatch({
        type: POST_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

const logoutUserAction = () => async dispatch => {
  try {

    localStorage.removeItem('userAuthData');
    dispatch({
      type: USER_LOGOUT_SUCCESS,
    });
  } catch (error) {
  }
}

const editUserProfile = (id, bio, tech, jobtitle) => {
  return async dispatch => {
    try {
      dispatch({
        type: USER_EDITPROFILE_REQUEST,
      });


      const config = {
        headers: {
          'Content-Type': 'application/json',       },
      };
      const { data } = await axios.put('http://localhost:4000/app/editprofile', {
        id,
        bio,
        tech,
        jobtitle,


      },
        config
      ); dispatch({
        type: USER_EDITPROFILE_SUCCESS,
        payload: data,
      });
      localStorage.setItem('userAuthData', JSON.stringify(data));
  
    } catch (error) {
      dispatch({
        type: USER_EDITPROFILE_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  }
}
export { signupuserAction, loginUserAction, postAction, logoutUserAction, editUserProfile };