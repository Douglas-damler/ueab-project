import React from 'react';
import { Nav, Navbar, Container, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import image from '../../images/logo.png';

export const Navigation = () => {

  return (
  <Navbar className="navbar" collapseOnSelect expand="lg" style={{background: "#3352a5"}} variant="light">
    <Container>
      <Navbar.Brand style={{background: "none", border: "none", padding: "0"}} href="#home"><img className="logo" style={{height: "45px", borderBlock: "none"}} src={image} alt="ueab logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="links">
            <Nav className="me-auto">
              <NavLink to="/"><span>Home</span></NavLink>
            </Nav>
      <Nav>
        <NavLink to="/tutorials"><span>Tutorials</span></NavLink>
        <NavLink to="/gallery"><span>Gallery</span></NavLink>
        <NavLink to="/about"><span>About</span></NavLink>
        <NavLink to="/contacts"><span>Contacts</span></NavLink>
        <NavLink to="/sign-in"><span>SignIn</span></NavLink>
        {/* <NavLink to="/admin"><span>Signup</span></NavLink> */}
      </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}