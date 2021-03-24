import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
import { UserContext } from '../../UserContext';
import download from './download.png'
import SignedOutNav from './SignedOutNav';
import SignedInNav from './SignedInNav';

const ForallNavbar = () => {
  const { user, setUser } = useContext(UserContext)
  const logout = async () => {
    try {
      const res = await fetch('http://localhost:4000/logout', {
      });
      const data = res.json();
      console.log('logout data', data);
      setUser(null);
    } catch (error) {
      console.log(error);
    }

  }
  const menu = user ? <SignedInNav logout={logout} /> : <SignedOutNav />
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

            {menu}

          </Nav>
        </Collapse>

      </Navbar>
    </div>
  )
}


export default ForallNavbar;
