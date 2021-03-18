import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
import { Link } from 'react-router-dom';

export class ForallNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar className="light" color="light" light expand="md">
          <NavbarToggler />
          <Collapse navbar>
            <Nav navbar>
              <NavItem>
                <NavLink><Link to="/">CSOverFlow</Link></NavLink>
              </NavItem>
              <NavItem className="blank">
                <NavLink></NavLink>
              </NavItem>
              <NavItem className="blank">
                <NavLink><Link to="/">Home</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/">Profile</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/login">Login</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/signup">Singup</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/">Logout</Link></NavLink>
              </NavItem>

            </Nav>
          </Collapse>

        </Navbar>
      </div>
    )
  }
}
export default ForallNavbar;
