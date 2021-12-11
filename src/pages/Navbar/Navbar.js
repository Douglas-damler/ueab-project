import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import image from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faImages,
  faVideo,
  faTachometerAlt,
  faSignInAlt,
  faAddressBook,
  faComment,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export const Navigation = () => {
  const render = useSelector((state) => state.signin.render);
  const location = useLocation();

  return (
    <Navbar
      className="navbar-sticky"
      collapseOnSelect
      expand="lg"
      style={{ background: "#3352a5" }}
      variant="light"
    >
      <Container>
        <Navbar.Brand
          style={{ background: "none", border: "none", padding: "0" }}
          to="/"
        >
          <img
            className="logo"
            style={{ height: "45px", borderBlock: "none" }}
            src={image}
            alt="ueab logo"
          />
          {render ? (
            <span
              hidden={
                !(
                  location.pathname === "/admin/dashboard" ||
                  location.pathname === "/admin/add-photos-and-videos" ||
                  location.pathname === "/admin/add-new-admins"
                )
              }
            >
              <FontAwesomeIcon
                className="navbar-icons"
                id="sidebarToggle"
                icon={faEllipsisV}
              />
            </span>
          ) : (
            <></>
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="links">
          <Nav className="me-auto">
            <NavLink className="py-2" to="/">
              <span>
                <FontAwesomeIcon icon={faHome} /> Home
              </span>
            </NavLink>
          </Nav>
          <Nav>
            <NavLink className="py-2" to="/tutorials">
              <span>
                <FontAwesomeIcon className="navbar-icons" icon={faVideo} />{" "}
                Tutorials
              </span>
            </NavLink>
            <NavLink className="py-2" to="/gallery">
              <span>
                <FontAwesomeIcon className="navbar-icons" icon={faImages} />{" "}
                Gallery
              </span>
            </NavLink>
            <NavLink className="py-2" to="/about">
              <span>
                <FontAwesomeIcon
                  className="navbar-icons"
                  icon={faAddressBook}
                />{" "}
                About
              </span>
            </NavLink>
            <NavLink className="py-2" to="/contacts">
              <span>
                <FontAwesomeIcon className="navbar-icons" icon={faComment} />{" "}
                Contacts
              </span>
            </NavLink>
            {render ? (
              <NavLink className="py-2" to="/admin/dashboard">
                <span style={{ color: "orange" }}>
                  <FontAwesomeIcon
                    className="navbar-icons"
                    icon={faTachometerAlt}
                  />{" "}
                  Dashboard
                </span>
              </NavLink>
            ) : (
              <NavLink className="py-2" to="/sign-in">
                <span>
                  <FontAwesomeIcon
                    className="navbar-icons"
                    icon={faSignInAlt}
                  />{" "}
                  SignIn
                </span>
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
