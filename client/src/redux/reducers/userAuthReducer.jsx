import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, POST_REQUEST, POST_SUCCESS, POST_FAIL, USER_LOGOUT_SUCCESS, USER_EDITPROFILE_REQUEST, USER_EDITPROFILE_SUCCESS, USER_EDITPROFILE_FAIL } from "../actions/users/actionTypes";

const postReducer = (state = {}, action) => {
  switch (action.type) {
    //post
    case POST_REQUEST:
      return {
        loading: true,
      };
    case POST_SUCCESS:
      return {
        postInfo: action.payload,
      };
    case POST_FAIL:
      return {
        error: action.payload
      };
    default:
      return state;
  }
}

const updateReducer = (state={},action)=>{
  switch(action.type){
    case USER_EDITPROFILE_REQUEST:
      return {
        loading: true,
      }
    case USER_EDITPROFILE_SUCCESS:
      return {
        user: action.payload,
        success: true,
      }
    case USER_EDITPROFILE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
      default:
        return state;
  }
}
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        userInfo: action.payload,
      };
    case USER_REGISTER_FAIL:
      return {
        error: action.payload,
        loading: false,
      };


    //Login
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        userInfo: action.payload,
      };
    case USER_LOGIN_FAIL:
      return {
        error: action.payload,
      };
    case USER_LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
}
export { userReducer, postReducer, updateReducer };