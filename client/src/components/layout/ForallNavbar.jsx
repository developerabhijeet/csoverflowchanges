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
import download from './download.png';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUserAction } from '../../redux/actions/users/userActions';
const ForallNavbar = () => {
  const state= useSelector(state=> state.userLogin)
  const {loading, userInfo, error} = state;
  const dispatch  = useDispatch();
  const logoutHandler = () =>{
    dispatch(logoutUserAction())
  }

  const currentUser = localStorage.getItem('userAuthData')
  ? JSON.parse(localStorage.getItem('userAuthData')) : null;
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
         
            {userInfo?( 
              <>
               <NavItem className="navs">
              <NavLink><Link to="/">Home</Link></NavLink>
            </NavItem>
              <NavItem className="navs">
              <NavLink><Link to={`/profile/${currentUser._id}`}>Profile</Link></NavLink>
            </NavItem>
            <NavItem className="navs">
              <NavLink onClick={logoutHandler}><Link to="/login"> Logout</Link></NavLink>
            </NavItem>

            </>
            ):(<>
            <NavItem className="navs">
              <NavLink><Link to="/login"> Login  </Link></NavLink>
            </NavItem>
            <NavItem className="navs">
              <NavLink><Link to="/signup">  Signup </Link></NavLink>
            </NavItem>
              
            </>)}
            
          
          </Nav>
        </Collapse>

      </Navbar>
    </div>
  )
}


export default ForallNavbar;
