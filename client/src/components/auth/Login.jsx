import React, { useContext, useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom';
import { loginUserAction } from '../../redux/actions/users/userActions';
import { UserContext } from '../../UserContext';

import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import ErrorMessage from './ErrorMessage';
const Login = ({history})=>{

  // const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();


  const state = useSelector(state=>{
    return state.userLogin;
  });
  const {loading, userInfo, error} = state
  console.log(state)
  const submitHandler = e =>{
    e.preventDefault();
    
    dispatch(loginUserAction(email,password));
    //Redirect to Home Page after success in login
   


  };
  useEffect(()=>{
    if(userInfo){
      
      history.push('/');
    }
  },[state]);

  return (
    <Container className="login">
      
      <h2>Sign In</h2><br/>
      {loading && <h4>Loading...</h4>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form className="form" onSubmit={submitHandler}>
        <Col>
          <FormGroup>
            <Label>Email*</Label>

            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="myemail@email.com"
              value={email}
              onChange={e=>setEmail(e.target.value)}
            />
            {/* <div className="email error red-text">{emailError}</div>
            <label htmlFor="email">Email</label> */}
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="examplePassword">Password*</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
              value={password}
              onChange={e=>setPassword(e.target.value)}
            />
            {/* <div className="password error red-text">{passwordError}</div>
            <label htmlFor="password">Password</label> */}
          </FormGroup>
        </Col>
        <Button className="btn-submit">Submit</Button>
      </Form><br/>
      <Label><Link to="/resetpassword">Forgot Password?</Link></Label>
    </Container>
  );
}

export default Login;
