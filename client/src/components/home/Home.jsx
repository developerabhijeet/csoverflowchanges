import React,{Component} from 'react'
import { MDBCol, MDBInput } from "mdbreact";
import {
  Container, Form,
  Button} from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
    return (
    <div>
      <center>
        <div className="post-link">
      <h6 className="home-text"><Link to="/post">Post Your Errors buddy!</Link></h6>
        </div>
      </center>
      <Container className="home">
          <p>Problem 1:</p>
          <Form className="form">
            <MDBCol md="8" className="post-text-center">
              <MDBInput type="textarea" label="Enter Your Answers above" rows="3" />
            </MDBCol>
            <Button className="btn-submit">Comment</Button>
          </Form>
          </Container>
    </div>
  )
}
}
export default Home;
