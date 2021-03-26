import React,{useState,useEffect, Component} from 'react'
import DataTable from './data-table';
import { useParams } from 'react-router-dom';
const View = (props)=>{
  const id = useParams()
  console.log(id.id)
  useEffect(async()=>{
 
      try {
        const res = await fetch(`http://localhost:4000/app/post+${id.id}`, {
  
          method: 'GET'
        });
        const data = await res.json();
        console.log(data);

      }catch(err){
        console.log(err);
      }
  },[])

    
  return (
    <div>
   

  
      </div>
  )
}
export default View







/*import React,{useState,useEffect, Component} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import detailsPost from '../../actions/PostActions';
const View = (props)=>{
  const postDetails = useSelector(state=>state.postDetails)
   const {post,loading, error} = postDetails;
   const dispatch = useDispatch()
   const postId = props.match.params.id;
   useEffect(()=>{
     console.log(postId);
     dispatchEvent(detailsPost(postId));
   },[dispatch, postId]);
 
  return (
    <div>
  

      <ul>
        <li>
          Post:{post.post}
        </li>
    <li>
      Name: {post.name}
    </li>
      </ul>
      </div>
  )
}
export default View;*/