import React,{useEffect, useState} from 'react'
import {
  NavItem,
  NavLink,

} from 'reactstrap';
import { Link } from 'react-router-dom';


const SignedInNav = ({logout, users}) => {
  
  return (
    <>
      <NavItem className="blank">
        <NavLink><Link to="/">Home</Link></NavLink>
      </NavItem>
      <NavItem>
        <NavLink><Link to={`/profile/${users._id}`}>Profile</Link></NavLink>
      </NavItem>

      <NavItem>
        <li onClick={logout} className="green"><a href="">Logout</a></li>

      </NavItem>
    </>
  )
}

export default SignedInNav;
