import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#3322aa" }} expand="md">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand style={{ color: "#fff" }}>
              <Link to={`/`}>
                Tienda Lean
              </Link>
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link style={{ color: "#fff" }}>
                <Link to={`/category/cat1`}>
                  Cat1
                </Link>
              </Nav.Link>
              <Nav.Link style={{ color: "#fff" }}>
                <Link to={`/category/cat2`}>
                  Cat2
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Text>
            <CartWidget />
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}
