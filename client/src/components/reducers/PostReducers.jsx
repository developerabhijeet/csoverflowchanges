
import { POST_DETAILS_FAIL, POST_DETAILS_SUCCESS, POST_DETAILS_REQUEST  } from '../../constant/PostConstant';


export const postDetailsReducer=(state={post:{} },action)=>{
  switch(action.type){
      case POST_DETAILS_REQUEST:
          return {loading:true};
          case POST_DETAILS_SUCCESS:
              return{loading:false,post:action.payload};
              case POST_DETAILS_FAIL:
                  return {loading:false,error:action.payload}
                  default:
                      return state;
  }
  }
