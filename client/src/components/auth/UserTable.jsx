import React, { Component } from 'react'
import {Table} from 'reactstrap';
class UserTable extends Component {

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Technology</th>

            <th>Bio</th>
            <th>JobTitle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="post">
              {this.props.obj.email}
            </td>
            <td>
              {this.props.obj.name}
            </td>
            <td>
              {this.props.obj.tech}
            </td>
            <td>
              {this.props.obj.bio}
            </td>
            <td>
              {this.props.obj.jobtitle}
            </td>



          </tr>
        </tbody>
      </Table>

    )
  }
}
export default UserTable; 
