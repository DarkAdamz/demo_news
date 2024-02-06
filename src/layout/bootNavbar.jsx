import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const bootNavbar = () => {
  return (
    <>
      <Navbar bg="danger" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><h2>NEWS <span className='badge bg-light text-dark'>DEMO</span></h2></Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-2">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default bootNavbar;