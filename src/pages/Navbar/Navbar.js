import React from 'react';
import { Nav, Navbar, Container, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import image from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const render = useSelector((state) => state.signin.render);
  return (
      <Navbar className="navbar-sticky" collapseOnSelect expand="lg" style={{background: "#3352a5"}} variant="light">
        <Container>
          <Navbar.Brand style={{background: "none", border: "none", padding: "0"}} href="#home"><img className="logo" style={{height: "45px", borderBlock: "none"}} src={image} alt="ueab logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className="links">
                <Nav className="me-auto">
                  <NavLink to="/"><span><FontAwesomeIcon icon={faHome} /> Home</span></NavLink>
                </Nav>
          <Nav>
            <NavLink to="/tutorials"><span>Tutorials</span></NavLink>
            <NavLink to="/gallery"><span>Gallery</span></NavLink>
            <NavLink to="/about"><span>About</span></NavLink>
            <NavLink to="/contacts"><span>Contacts</span></NavLink>
            {render ? ( <NavLink to="/admin/dashboard"><span style={{color:"orange"}}>Dashboard</span></NavLink>): (<NavLink to="/sign-in"><span>SignIn</span></NavLink>)}
          </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}