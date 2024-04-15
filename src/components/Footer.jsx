import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaGithub, FaMedium, FaStackOverflow } from "react-icons/fa6";

function Footer() {
  return (
    <Navbar expand="lg" className="bg-warning p-3">
      <Container className="d-flex justify-content-center gap-5 mt-2">
        <a href="https://github.com/BecooOn" className="text-dark">
          <FaGithub className="fs-1" />
        </a>
        <a href="https://medium.com/@becooOn" className="text-dark">
          <FaMedium className="fs-1" />
        </a>
        <a href="https://stackoverflow.com/users/23137995/becooon" className="text-dark">
          <FaStackOverflow className="fs-1" />
        </a>
      </Container>
    </Navbar>
  );
}

export default Footer;
