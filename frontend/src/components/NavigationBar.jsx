import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-primary">
    <Container fluid>
      <Navbar.Brand  className="fw-bold"><Link  className="text-decoration-none text-white" to="/">सवारी परीक्षण कार्यालय</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link><Link  className="text-decoration-none text-white" to="/login">गृहपृष्‍ठ</Link></Nav.Link>
          <Nav.Link href="#action2"></Nav.Link>
          <NavDropdown title="डाउलोडस्" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">बाटो इजाजत पत्र नविकरण फारम</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
            बाटो इजाजत पत्र प्रतिलिपि फारम
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
            बाटो परिवर्तन फारम
            </NavDropdown.Item>
            <NavDropdown.Item href="#action5">
            प‌ंजिकरण नविकरण फारम
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">
            बाटो ईजाजत
          </Nav.Link>
          <Nav.Link href="#">
            प‌ंजिकरण
          </Nav.Link>
          <Nav.Link href="#">
          स्तर
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="खोज्नुहोस्"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-warning">खोज्नुहोस्</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavigationBar