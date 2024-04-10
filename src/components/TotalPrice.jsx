import React from "react";
import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table';

const TotalPrice = ({ totalPrice }) => {
  console.log(totalPrice);
  return (
    <Container className="mt-2 mb-5" style={{width:"320px"}}>
      <Table striped bordered hover>
      <tbody>
        <tr>
          <td className="fw-bold">Subtotal</td>
          <td>{totalPrice.subtotal.toFixed(2)} $</td>
        </tr>
        <tr>
          <td className="fw-bold">Tax(%18)</td>
          <td>{totalPrice.tax.toFixed(2)} $</td>
        </tr>
        <tr>
          <td className="fw-bold">Shipping</td>
          <td>{totalPrice.shipping.toFixed(2)} $</td>
        </tr>
        <tr>
          <td className="fw-bold">TOTAL</td>
          <td className="fw-bold">{totalPrice.total.toFixed(2)} $</td>
        </tr>
      </tbody>
    </Table>
    </Container>
  );
};

export default TotalPrice;
