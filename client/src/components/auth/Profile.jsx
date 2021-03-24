import React,{Component} from 'react';

import {Table} from 'reactstrap';
const Profile=({user})=>{
 console.log(user);
  return (
    <Table >
   <center>
    <tbody>
    <th>Email: </th>
        <tr>
          {user.email}
        </tr>
        <th>Name: </th>
        <tr>
      
          {user.name}
        </tr>
        <th>Technology: </th>
        <tr>
        
          {user.tech}
        </tr>
        <th>Bio:</th>
        <tr>
 
          {user.bio}
        </tr>
        <th>JobTitle: </th>
        <tr>
    
          {user.jobtitle}
        </tr>


      
    </tbody>
    </center>
  </Table>

  )
}

export default Profile;
