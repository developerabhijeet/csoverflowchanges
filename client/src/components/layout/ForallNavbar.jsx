import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
import download from './download.png'

export class ForallNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar className="light navigation" color="orange" light expand="md">
          <NavbarToggler />
          <Collapse navbar>
            <Nav navbar className="">
              <NavItem>
                <NavLink><Link to="/"><img src={download} className="logonav" alt="logo" /></Link></NavLink>
              </NavItem>
              <NavItem className="blank">
                <NavLink><Link to="/">   </Link></NavLink>
              </NavItem>
              <NavItem className="blank">
                <NavLink><Link to="/">Home</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/profile">Profile</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/login">Login</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/signup">Singup</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/login">Logout</Link></NavLink>
              </NavItem>

            </Nav>
          </Collapse>

        </Navbar>
      </div>
    )
  }
}

export default ForallNavbar;
