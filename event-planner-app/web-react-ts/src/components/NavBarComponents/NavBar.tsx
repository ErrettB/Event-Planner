import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavBarStyle';

const Navbar = (props:any) => {
  return (
    <>
      <Nav>
        {/* <NavLink to='/'>
          <img src={require('../../images/logo.svg')} alt='logo' />
        </NavLink> */}
        <Bars />
        <NavMenu>
          <NavLink to='/' >
            About
          </NavLink>
          <NavLink to='/services' >
            Services
          </NavLink>
          <NavLink to='/contact-us' >
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' >
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;