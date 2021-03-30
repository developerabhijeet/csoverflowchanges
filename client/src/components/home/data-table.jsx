import React, { Component } from 'react';
import './post.css';
import { Link } from 'react-router-dom';

import { Container, Col, Label, Button } from 'reactstrap';
class DataTable extends Component {


  render() {
    return (
      
      <Container>
        <Col>
          <Label className="font-weight-bold details">PROBLEM STATEMENT: </Label><br />
          <Label className="font-weight-bold">{this.props.obj.post}</Label>
        </Col>
        <Link clasName="link" to={`/post/${this.props.obj._id}`}>View Post </Link>

      </Container>
    );
  }
}

export default DataTable;