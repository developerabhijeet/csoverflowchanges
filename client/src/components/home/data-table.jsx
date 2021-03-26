import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Comments from './comments';
import './post.css';
import { Link } from 'react-router-dom';
import View from './View'

class DataTable extends Component {
  

  render() {
    
   
    return (

      <Table>

<h1>{this.props.key}</h1>
        <thead>
          <tr>

            <th>Problem</th>
            <th>Posted by:</th>
            <th>Domain</th>
          </tr>
        </thead>
        <tbody>
          

            <tr className="post">

              <td>{this.props.obj.post}</td>
              
            
            <td>
              {this.props.obj.name}
            </td>
            <td>
              {this.props.obj.domain}
            </td>
      
          <td>
            {this.props.obj.date}
          </td>
          <td>
            <Link to={`/post/${this.props.obj._id}`}>ViewPost </Link>
          </td>
      </tr>
    
        </tbody>
      </Table>
    );
  }
}

export default DataTable;