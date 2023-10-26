import React, { useState } from 'react';
import { Container, Nav, Navbar, Form, Button, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Navbar.css';

function MobileOffcanvasNavbar() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    if (window.innerWidth <= 768) {
      setIsHovered(!isHovered);
    }
  };

  return (
    <Navbar bg="light" expand="lg" className={isHovered ? 'navbar-hovered' : ''} onMouseEnter={handleHover} onMouseLeave={handleHover} onToggle={() => setIsHovered(false)}>
      <Container>
        <Navbar.Brand>Udlån</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" style={{marginBottom: "10px"}}/>
        <Navbar.Collapse id="offcanvasNavbar">
          <Nav className="me-auto">
            <Nav.Link href="/Udlaanssystem" className="nav-link-hover">Udlånssystem</Nav.Link>
            <Nav.Link href="/Registrering" className="nav-link-hover">Registrering</Nav.Link>
            <Nav.Link href="/Opret-Bruger" className="nav-link-hover">Opret Bruger</Nav.Link>
            <Nav.Link href="/Udlaansoversigt" className="nav-link-hover">Udlånsoversigt</Nav.Link>
            {/* <Nav.Link href="/Computeroversigt" className="nav-link-hover">Computer oversigt</Nav.Link> */}
            <Nav.Link href="/Aflevering" className="nav-link-hover">Aflever</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/Login" style={{ color: 'red' }} className="nav-link-hover-button">Log ud</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Offcanvas
        show={false}
        target="offcanvasNavbar"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3"> 
            <Nav.Link href="/Udlaanssystem">Udlånssystem</Nav.Link>
            <Nav.Link href="/Registrering">Registrering</Nav.Link>
            <Nav.Link href="/Opret-Bruger">Opret Bruger</Nav.Link>
            <Nav.Link href="/Udlaansoversigt">Udlånsoversigt</Nav.Link>
            {/* <Nav.Link href="/Computeroversigt">Computer oversigt</Nav.Link> */}
            <Nav.Link href="/Aflevering">Aflever</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}

export default MobileOffcanvasNavbar;
