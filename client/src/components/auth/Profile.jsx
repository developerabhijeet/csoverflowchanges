import React from 'react'
import { Table } from 'reactstrap';
const Profile = () => {
  return (
    <div className="profile">
     <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Bio</th>
          <th>Technology</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>I am Developer</td>
          <td>ReactJS</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Profile;
