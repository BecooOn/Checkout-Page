import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Navbar expand="lg" className="bg-info fixed-bottom">
      <Container>
        <Navbar.Brand href="#">Footer</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Footer;