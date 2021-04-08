import React, { Component, setState, useState, useEffect } from 'react'
import { MDBCol, MDBInput } from "mdbreact";
import {
  Container, Form,
  Button, Input, Label, FormGroup
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { postReducer } from '../../redux/reducers/userAuthReducer';
import { postAction } from '../../redux/actions/users/userActions';
const Post =()=>{
  
  const [post, setPost] = useState('');
  const [domain, setDomain] = useState('');
  const dispatch = useDispatch();

  const state = useSelector(state=>{
    return state.userLogin;
  });
  const{loading, userInfo,error} = state;
  const username = state.userInfo.user.name;
  const name = username;
 
  console.log(name)
  const onSubmit = e=>{
    e.preventDefault();
    if((e.target.value)==''){
      alert('all fields must be filled')
    }else{
      dispatch(postAction(name,post,domain))
      window.location='/'
  }
}
const popup = () =>{
    alert("you are not allowed to change the name");
  }
  

    return (
      <div>
        <Container className="signup">
          <h2>Post Your Problems</h2>
          <Form className="form" onSubmit={onSubmit}>
            <MDBCol md="6" className="post-text-center">
              <MDBInput type="textarea"
                label="Enter Your Errors above"
                rows="10"
                onChange = {e=>setPost(e.target.value)}
                value={post} />
            </MDBCol>
            <Input className="w-50"
              type="text"
              name="name"
              id="name"
              placeholder="You are not allowed to change name"
              onChange={popup}
              value={state.userInfo.user.name} />
            <Input className="w-50"
              type="text"
              name="domain"
              id="domain"
              placeholder="Enter The Problem Domain"
              onChange={e=>setDomain(e.target.value)}
              value={domain} />
              <br/>
            <Button color="primary"  className="btn-submit primary">Post</Button>
          </Form>
        </Container>
      </div>
    )
  
}
export default Post;
