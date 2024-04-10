import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import iziToast from "izitoast";

function NavBar({ countProduct, toggle, setToggle }) {
  const handleMaintain = () => {
    iziToast.show({
      title: "Warning!",
      message: "It is maintaing..",
      position: "topRight",
      timeout: 3000,
      color: "red",
    });
  };
  return (
    <>
      <Navbar bg="warning" data-bs-theme="dark" className="fixed-top">
        <Container>
          <Navbar.Brand href="https://github.com/BecooOn">
            <Image src="./img/BecooOn.png" roundedCircle width={40} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="fw-bold fs-5 text-dark">
              Home
            </Nav.Link>
            <Nav.Link
              href="#Product"
              className="fw-bold fs-5 text-dark"
              onClick={() => setToggle(!toggle)}
            >
              Form
            </Nav.Link>
            <Nav.Link href="#Pricing" className="fw-bold fs-5 text-dark">
              Pricing
            </Nav.Link>
          </Nav>
          <FaShoppingCart
            className="fs-2"
            style={{ cursor: "pointer" }}
            onClick={handleMaintain}
          />{" "}
          <sup className="mt-3 ms-2 translate-middle badge rounded-pill bg-danger fs-6">
            {countProduct}
          </sup>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
