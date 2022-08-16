import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const NavStyle = {
    color: "#E1D9D1",
    textDecoration: "none",
    fontSize: "1rem",
    padding: "1rem 0 1rem",
    margin: "0 1rem",
  };

  const active = {
    color: "#fff",
    borderBottom: "2px solid #fff",
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link
          to="/"
          style={
            location.pathname === "/"
              ? {
                  ...NavStyle,
                  ...active,
                  borderBottom: "none",
                }
              : { ...NavStyle }
          }
        >
          <span style={{ fontSize: "1rem" }}>REACT FUNDAMENTAL</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/albums"
              style={
                location.pathname === "/albums"
                  ? {
                      ...NavStyle,
                      ...active,
                    }
                  : { ...NavStyle }
              }
            >
              Albums
            </Link>
            <Link
              to="/posts"
              style={
                location.pathname === "/posts"
                  ? { ...NavStyle, ...active }
                  : { ...NavStyle }
              }
            >
              Posts
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
