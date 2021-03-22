import React, { Component } from 'react'
import { MDBCol, MDBInput } from "mdbreact";
import {
  Container, Form,
  Button
} from 'reactstrap';
class Comments extends Component {
  render() {
    return (
      <div>
        <Form className="form">
          <MDBCol md="8" className="post-text-center">
            <MDBInput type="textarea" label="Enter Your Answers above" rows="3" />
          </MDBCol>
          <Button className="btn-submit">Comment</Button>
        </Form>
      </div>
    );
  }
}
export default Comments;
