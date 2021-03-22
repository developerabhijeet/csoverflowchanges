import React, { Component, setState } from 'react'
import { MDBCol, MDBInput } from "mdbreact";
import {
  Container, Form,
  Button, Input, Label, FormGroup} from 'reactstrap';
  import axios from 'axios';
class Post extends Component {
  constructor(){
    super()
    this.state={
      name:'',
      post:''
    }
  }
  changeName = (event) =>{
    this.setState({
      name:event.target.value
    })
  }
  
  changePost = (event)=>{
    this.setState({
      post:event.target.value
    })
  }


  onSubmit = (event)=>{
    event.preventDefault()

    const posted = {
      name: this.state.name,
      post: this.state.post,
    }
    axios.post('http://localhost:4000/app/post', posted)
    .then(response=> console.log(response.data))

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
                value={this.state.post}/>
            </MDBCol>
            <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Full Name"
                onChange={this.changeName}
                value={this.state.name}/>
            <Button className="btn-submit">Submit</Button>
          </Form>
          <p>{this.post}</p>
        </Container>
      </div>
    )
  }
}
export default Post;
