import React, { useState } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import Axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    Axios({
      method: "POST",
      data: {
        email: email,
        password: password,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res));
  };
  
    return (
      <Container className="login">
        <h2>Sign In</h2>
        <Form className="form" onSubmit={login}>
          <Col>
            <FormGroup>
              <Label>Email*</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Button className="btn-submit">Submit</Button>
        </Form>
      </Container>
    );
  }

export default Login;