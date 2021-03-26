import React,{useState,useEffect, Component} from 'react'
import DataTable from './data-table';
const View = (props)=>{
  console.log(props._id)

    
  return (
    <div>
      <p>{props.post}</p>

      <p>{props.name}</p>

      <p>{props.date}</p>
      </div>
  )
}
export default View;
