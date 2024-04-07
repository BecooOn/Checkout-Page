import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function FormPage({getProducts}) {
  const [enteredProduct, setEnteredProduct] = useState({
    name: "",
    price: 0,
    quantity: 0,
    image: "",
  });

  const handleChange = (e) => {
    setEnteredProduct({
      ...enteredProduct,
      [e.target.name]: e.target.value,
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postProduct(enteredProduct);
    setEnteredProduct({
      [e.target.name]: ""
    });
    // console.log(enteredProduct);
  };
 

  const postProduct = async (enteredProduct) => {
    try {
      await axios.post("https://661248a395fdb62f24ee586e.mockapi.io/products", enteredProduct)
      // console.log(res)
    } catch (error) {
      console.log(error)
    }
    getProducts()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={enteredProduct.name}
          placeholder="Enter product name..."
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={enteredProduct.price}
          placeholder="Enter product price..."
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Quantity</Form.Label>
        <Form.Control
          type="number"
          name="quantity"
          value={enteredProduct.quantity}
          placeholder="Enter product quantity..."
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Image</Form.Label>
        <Form.Control
          type="text"
          name="image"
          value={enteredProduct.image}
          placeholder="Enter product image url..."
          onChange={handleChange}
        />
      </Form.Group>
      <Container className="text-center"> 
      <Button variant="success" type="submit" onClick={handleSubmit}>
        Add to List
      </Button>
      </Container>
    </Form>
  );
}

export default FormPage;
