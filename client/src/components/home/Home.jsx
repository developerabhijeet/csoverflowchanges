import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DataTable from './data-table';

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { postsCollection: [], userCollection: [] };

  }



  componentDidMount = () => {
    axios.get('http://localhost:4000/app')
      .then(res => {
        this.setState({ postsCollection: res.data });
        
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  dataTable() {
    return this.state.postsCollection.map((data, i) => {
      return <DataTable obj={data} key={i} />
    });
  }
  
  render() {



    return (
      <div>
        <center>
          <div className="post-link">

            <h6 className="home-text"><Link to="/post">Post Your Errors buddy!</Link></h6>
       
          </div>
        </center>
        <Container className="home">
          <Form className="form">
            <Col>
              <FormGroup>
                <Label>Search</Label>
                <Input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Type the name of user to find"

                />
                <Button>SEARCH</Button>
              </FormGroup>
            </Col>
          </Form>
          <Container>
            {this.dataTable()}
          </Container>


        </Container>

      </div>
    )
  }
}

export default Home;
