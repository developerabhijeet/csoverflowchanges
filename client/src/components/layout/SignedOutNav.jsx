import React from 'react'
import {
  NavItem,
  NavLink,

} from 'reactstrap';
import { Link } from 'react-router-dom';
const SignedOutNav = () => {
  return (
    <>
      <NavItem>
        <NavLink><Link to="/login">Login</Link></NavLink>
      </NavItem>
      <NavItem>
        <NavLink><Link to="/signup">Singup</Link></NavLink>
      </NavItem>
    </>
  )
}

export default SignedOutNav;
