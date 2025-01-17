import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #ffffff;
  }
  .navbar-brand,
  .navbar-nav {
    color: black;

    &: hover {
      color: #ffffff;
    }
    .nav-bar-custom {
      color: black;
    }
  }
`;

export const NaviBar = () => (
  <Styles>
    <Navbar expand="lg" bg="light" variant="light" fixed="top">
      <Navbar.Brand href="/">hi</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href="/" className="nav-bar-custom">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about" className="nav-bar-custom">
              About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/contacts" className="nav-bar-custom">
              Contacts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/makeaninquiry" className="nav-bar-custom">
              Make an inquiry
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
