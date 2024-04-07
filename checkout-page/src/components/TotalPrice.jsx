import React from "react";
import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table';

const TotalPrice = ({ totalPrice }) => {
  console.log(totalPrice);
  return (
    <Container className="mt-2 mb-5">
      <Table striped bordered hover>
      <tbody>
        <tr>
          <td>Subtotal</td>
          <td>{totalPrice.subtotal.toFixed(2)} $</td>
        </tr>
        <tr>
          <td>Tax(%18)</td>
          <td>{totalPrice.tax.toFixed(2)} $</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td>{totalPrice.shipping.toFixed(2)} $</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{totalPrice.total.toFixed(2)} $</td>
        </tr>
      </tbody>
    </Table>
    </Container>
  );
};

export default TotalPrice;
