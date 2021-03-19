import React, { Component } from 'react'
import { MDBCol, MDBInput } from "mdbreact";
import {
  Container, Form,
  Button} from 'reactstrap';

class Post extends Component {
  render() {
    return (
      <div>
        <Container className="signup">
          <h2>Post Your Problems</h2>
          <Form className="form">
            <MDBCol md="8" className="post-text-center">
              <MDBInput type="textarea" label="Enter Your Errors above" rows="5" />
            </MDBCol>
            <Button className="btn-submit">Submit</Button>
          </Form>
        </Container>
      </div>
    )
  }
}
export default Post;
