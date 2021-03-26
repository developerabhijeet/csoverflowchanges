import React from 'react'
import axios from 'axios';
import { POST_DETAILS_FAIL, POST_DETAILS_SUCCESS, POST_DETAILS_REQUEST } from '../constant/PostConstant';

  const detailsPost = (postId)=>async(dispatch)=>{
    try{
       dispatch({type:POST_DETAILS_REQUEST,payload:postId});
       const {data} = await axios.get("http://localhost:4000/app/" + postId);
     dispatch({type:POST_DETAILS_SUCCESS,payload:data});
 
 
    }catch(error){
       dispatch({type:POST_DETAILS_FAIL,payload: error.message});
 
 
    }
 
 }

export default detailsPost;
