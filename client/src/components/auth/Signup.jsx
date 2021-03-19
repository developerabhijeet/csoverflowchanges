import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

class Signup extends Component {
  render() {
    return (
      <Container className="signup">
        <h2>Sign Up</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label for="name">Name*</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Full Name"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="email">Email*</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="password">Password*</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Bio*</Label>
              <Input
                type="text"
                name="bio"
                id="bio"
                placeholder="Enter a breif Introduction about Yourself"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Job Title*</Label>
              <Input
                type="text"
                name="jobtitle"
                id="jobtitle"
                placeholder="Sotware Developer"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Technology*</Label>
              <Input
                type="text"
                name="tech"
                id="tech"
                placeholder="ReactJS, NodeJS, Python "
              />
            </FormGroup>
          </Col>





          <Button className="btn-submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default Signup;