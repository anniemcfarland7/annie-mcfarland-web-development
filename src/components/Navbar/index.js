import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavTabs() {
    const location = useLocation();
  
    return (
      <Navbar className="text-responsive" expand="lg">
        <Navbar.Brand className="text-responsive" as={Link} to="/annie-mcfarland-web-development/home">
            Annie McFarland Web Development
        </Navbar.Brand>
  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              to="/annie-mcfarland-web-development/home"
              className={
                location.pathname === "/annie-mcfarland-web-development/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/annie-mcfarland-web-development/projects"
              className={
                location.pathname === "/annie-mcfarland-web-development/projects"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Projects
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/annie-mcfarland-web-development/contact"
              className={
                location.pathname === "/annie-mcfarland-web-development/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Nav.Link>

            <Nav.Link
              href="https://drive.google.com/file/d/1UkODC9ifCNqGqzh5f78xLuObOLlD2Lr3/view?usp=sharing"
              target="_blank"
              className="nav-link"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
  export default NavTabs;
  