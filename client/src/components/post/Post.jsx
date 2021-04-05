import React, { Component, setState, useState, useEffect } from 'react'
import { MDBCol, MDBInput } from "mdbreact";
import {
  Container, Form,
  Button, Input, Label, FormGroup
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { postReducer } from '../../redux/reducers/userAuthReducer';
const Post =({history})=>{
  
  const [post, setPost] = useState('');
  const [domain, setDomain] = useState('');
  const dispatch = useDispatch();

  const state = useSelector(state=>{
    return state.userLogin;
  });
  const{loading, userInfo,error} = state;
  const name = state.userInfo.user.name;
  const postProblem = useSelector(state=>state.postProblem);
  const {postInfo} = postProblem;
 
  console.log(name)
  const onSubmit = e=>{
    e.preventDefault();
    if((e.target[0].value)==null||(e.target[0].value)==undefined){
      alert('all fields must be filled')
    }else{
    dispatch(postReducer(name,post,domain));
    window.location = '/'
  }
}
  // const [post,setPost] = useState('');
  // const [domain,setDomain] = useState('');
  // const state = useSelector(state=>{
  //   return state.userLogin;
  // });
  // const {loading, userInfo, error} = state
  // const x = state.userInfo.user;
  // console.log(x.name)
  // console.log(state.userInfo.user)
  const popup = () =>{
    alert("you are not allowed to change the name");
  }
  // const onSubmit = e=>{
  //   e.preventDefault();

  //   const posted = {
  //     name: state.userInfo.user.name,
  //     post,
  //     domain
  //   }
  //   axios.post('http://localhost:4000/app/post', posted)
  //     .then(response => console.log(response.data))

  //   window.location = '/';

  // }

    return (
      <div>
        <Container className="signup">
          <h2>Post Your Problems</h2>
          <Form className="form" onSubmit={onSubmit}>
            <MDBCol md="8" className="post-text-center">
              <MDBInput type="textarea"
                label="Enter Your Errors above"
                rows="5"
                onChange = {e=>setPost(e.target.value)}
                value={post} />
            </MDBCol>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="You are not allowed to change name"
              onChange={popup}
              value={state.userInfo.user.name} />
            <Input
              type="text"
              name="domain"
              id="domain"
              placeholder="Enter The Problem Domain"
              onChange={e=>setDomain(e.target.value)}
              value={domain} />
            <Button className="btn-submit">Post</Button>
          </Form>
        </Container>
      </div>
    )
  
}
export default Post;
