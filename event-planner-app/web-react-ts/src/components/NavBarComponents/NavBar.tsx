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
          <NavLink to='/about' >
            About
          </NavLink>
          <NavLink to='/services' >
            Services
          </NavLink>
          <NavLink to='/contact-us' >
            Contact Us
          </NavLink>
<<<<<<< HEAD
          <NavLink to='/' >
=======
          {/* <NavLink to='/login' >
>>>>>>> 61d449ec7c038a67b1062f74b31e9f3f24bc26c9
            Sign Up
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;