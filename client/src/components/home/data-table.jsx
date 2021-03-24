import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Comments from './comments';
import './post.css';
class DataTable extends Component {
  render() {
    console.log(this.props.obj._id)
    return (

      <Table>
        <thead>
          <tr>

            <th>Problem</th>
            <th>Posted by:</th>
            <th>Domain</th>
          </tr>
        </thead>
        <tbody>
          <tr>

            <td className="post">
            <tr>{this.props.obj._id}</tr>
              {this.props.obj.post}
            </td>
            <td>
              {this.props.obj.name}
            </td>
            <td>
              {this.props.obj.domain}
            </td>
          </tr>
          <tr>
            {this.props.obj.date}
          </tr>
          <tr>
            <Comments />
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default DataTable;