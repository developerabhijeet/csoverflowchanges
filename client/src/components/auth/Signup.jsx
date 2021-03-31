import React, { Component, setState } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import axios from 'axios';
class Signup extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      bio: '',
      jobtitle: '',
      tech: '',
    }
  }
  changeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  changeEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  changePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  changeBio = (event) => {
    this.setState({
      bio: event.target.value
    })
  }
  changeJobtitle = (event) => {
    this.setState({
      jobtitle: event.target.value
    })
  }
  changeTech = (event) => {
    this.setState({
      tech: event.target.value
    })
  }
  

  onSubmit = (event) => {
    event.preventDefault()
   
    const registered = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      bio: this.state.bio,
      jobtitle: this.state.jobtitle,
      tech: this.state.tech,
     

    }
    console.log(registered)
    
    axios.post('http://localhost:4000/app/signup', registered)
      .then((response) =>{ console.log(response.data)
        alert(`${response.message}`)
      })

    window.location = '/';
  }
  render() {
    return (
      <Container className="signup">
        <h2>Sign Up</h2>
        <Form className="form" onSubmit={this.onSubmit}>
          <Col>
            <FormGroup>
              <Label for="name">Name*</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Full Name"
                onChange={this.changeName}
                value={this.state.name}
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
                onChange={this.changeEmail}
                value={this.state.email}
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
                onChange={this.changePassword}
                value={this.state.password}
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
                onChange={this.changeBio.bind(this)}
                value={this.state.bio}
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
                onChange={this.changeJobtitle}
                value={this.state.jobtitle}
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
                onChange={this.changeTech}
                value={this.state.tech}
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