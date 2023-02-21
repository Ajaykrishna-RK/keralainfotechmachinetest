
import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Bannerlink() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Container>
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto  banner-links" >
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About us</Nav.Link>
      <Nav.Link href="#pricing">Our team</Nav.Link>
      <Nav.Link href="#pricing">Services</Nav.Link>
      <Nav.Link href="#pricing">Wedding</Nav.Link>
      <Nav.Link href="#pricing">Photo Gallery</Nav.Link>
      <Nav.Link href="#pricing">Testimonials</Nav.Link>
      <Nav.Link href="#pricing">Why choose Us</Nav.Link>
      <Nav.Link href="#pricing">Contact Us</Nav.Link>
    </Nav>
  
  </Navbar.Collapse>
</Container>
</Navbar>

<Container>
    <h3 style={{textAlign:"center",marginTop:"2%"}}>WELCOME TO SYMPHONY</h3>
      <Row>
        <Col>
        <p style={{textAlign:"center",marginTop:"2%"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </Col>
      </Row>
      <p style={{textAlign:"center",marginTop:"2%"}}>
        <button className='bannerLink-button'>Read More</button>
      </p>
    </Container>

</div>
  )
}

export default Bannerlink


