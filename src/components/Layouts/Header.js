import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import ModalSignIn from "./ModalSignIn";
import mainlogo from "../../assets/logo-main.png";
import "./Header.css";

const Header = () => {
  return (
    <section className="mt-2">
      <Navbar bg="light" expand="md">
        <div className="ms-4">
          <Navbar.Brand href="/">
            <img src={mainlogo} width="200px" height="60px" alt=" logo" />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle className="me-2" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-md-end"
        >
          <Nav className="ms-auto mb-2 mb-md-0" style={{ fontSize: "14px" }}>
            <Button
              as={Link}
              to="/register"
              className="btn btn-outline-success fw-bold me-md-2 m-1"
              variant="outline-sucess"
            >
              Register
            </Button>
            <Button
              className="btn btn-outline-primary fw-bold me-md-2 m-1"
              variant="outline-primary"
              style={{ marginRight: "5px" }}
            >
              <a
                style={{ textDecoration: "none" }}
                href="/jobpost"
                target="_blank"
              >
                Post a Job
              </a>
            </Button>
            <ModalSignIn />
            <NavDropdown title="EN" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ENGLISH</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">HINDI</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
};

export default Header;
