import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import iziToast from "izitoast";

function NavBar({ countProduct }) {
  const handleMaintain = () => {
    iziToast.show({
      title: "Warning!",
      message: "It is maintaing..",
      position: "topRight",
      timeout: 3000,
    });
  };
  return (
    <>
      <Navbar bg="warning" data-bs-theme="dark" className="fixed-top">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Product">Features</Nav.Link>
            <Nav.Link href="#Pricing">Pricing</Nav.Link>
          </Nav>
          <FaShoppingCart className="fs-2" onClick={handleMaintain} />{" "}
          <sup className="mt-3 ms-2 translate-middle badge rounded-pill bg-danger fs-6">
            {countProduct}
          </sup>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
