import React, { Component, setState } from 'react'
import { MDBCol, MDBInput } from "mdbreact";
import {
  Container, Form,
  Button, Input, Label, FormGroup
} from 'reactstrap';
import axios from 'axios';
class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.user.name,
      post: '',
      domain: ''
    }
  }
  changeName = (event) => {
    alert("You are not allowed to change name")
  }

  changePost = (event) => {
    this.setState({
      post: event.target.value
    })
  }
  changeDomain = (event) => {
    this.setState({
      domain: event.target.value
    })
  }



  onSubmit = (event) => {
    event.preventDefault()

    const posted = {
      name: this.state.name,
      post: this.state.post,
      domain: this.state.domain
    }
    axios.post('http://localhost:4000/app/post', posted)
      .then(response => console.log(response.data))

    window.location = '/';
  }
  render() {
    return (
      <div>
        <Container className="signup">
          <h2>Post Your Problems</h2>
          <Form className="form" onSubmit={this.onSubmit}>
            <MDBCol md="8" className="post-text-center">
              <MDBInput type="textarea"
                label="Enter Your Errors above"
                rows="5"
                onChange={this.changePost}
                value={this.state.post} />
            </MDBCol>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="You are not allowed to change name"
              onChange={this.changeName}
              value={this.state.name} />
            <Input
              type="text"
              name="domain"
              id="domain"
              placeholder="Enter The Problem Domain"
              onChange={this.changeDomain}
              value={this.state.domain} />
            <Button className="btn-submit">Post</Button>
          </Form>
        </Container>
      </div>
    )
  }
}
export default Post;
