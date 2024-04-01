import React from 'react';
import Doctors from '../components/Doctors';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Home = ({ doctorData }) => {
  return (
    <div className='home-container'>
      <Container className='navBar'>
        <Navbar expand="lg" className="banner my-2">
          <Container>
            <Navbar.Brand className="hosName ms-3" href="#">
              YKSL HOSPITAL
            </Navbar.Brand>
            <Nav className="me-3 links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#doctors">Our Doctors</Nav.Link>
            <Nav.Link href="#appointments">Appointments</Nav.Link>
            <Nav.Link href="#">Results</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </Container>
      <Doctors doctorData={doctorData} />
    </div>
  );
}

export default Home;
