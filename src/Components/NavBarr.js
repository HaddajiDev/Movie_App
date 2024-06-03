import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React from 'react'
import { Link } from 'react-router-dom';

function NavBarr() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className='bar'>
        <Navbar.Brand className='brand'>Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text_"            
            navbarScroll
          >
            <Nav.Link ><Link className='Nav_Text' to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link className='Nav_Text' to="/contact">Contact</Link></Nav.Link>            
            <Nav.Link ><Link className='Nav_Text' to="/about">About</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='Nav_Text'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarr