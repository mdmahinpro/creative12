import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Header.css";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <Container className="header">
      <Navbar className="px-3" expand="lg">
        <Navbar.Brand href="#home">
          <Link to="/">
            <img
              className="logo"
              src="https://i.ibb.co/vQ9v8Qm/logo.png"
              alt="Creative Logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="nav-link ml-4">
              <Link className="font-rong" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link ml-4">
              <Link className="font-rong" to="#portfolio">
                Our Portfolio
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link ml-4">
              <Link className="font-rong" to="#team">
                Our Team
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link ml-4">
              <Link className="font-rong" to="#contact">
                Contact Us
              </Link>
            </Nav.Link>
            {loggedInUser.email ? (
              <Link to="/login">
                <button className="main-btn ml-5 mr-0">Dashboard</button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="main-btn ml-5 mr-0">Login</button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
