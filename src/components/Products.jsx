import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import FormPage from "./FormPage";
import ProductCard from "./ProductCard";
import TotalPrice from "./TotalPrice";

const Products = ({ setCountProduct,toggle, setToggle }) => {
  const [productList, setProductList] = useState([]);
  const [totalPrice, setTotalPrice] = useState({
    subtotal: 0,
    tax: 0,
    shipping: 0,
    total: 0,
  });
  const handleProductList = () => {
    setToggle(!toggle);
  };

  const getProducts = async () => {
    const res = await fetch(
      "https://661248a395fdb62f24ee586e.mockapi.io/products"
    );
    const data = await res.json();
    setProductList(data);
    // console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container className="mt-5 mb-5">
      <Container className="text-center">
        <Button
          variant={toggle ? "danger" : "success"}
          className="mt-5 mb-3"
          onClick={handleProductList}
        >
          {toggle ? "Hide Form" : "Show Form"}
        </Button>
      </Container>
      {toggle ? (
        <Container>
          <FormPage getProducts={getProducts} />
          <div className="row">
            {productList.map((product) => (
              <div
                key={product.id}
                className="col-12 col-sm-12 col-md-4 col-lg-3"
              >
                <ProductCard
                  product={product}
                  getProducts={getProducts}
                  setCountProduct={setCountProduct}
                  setTotalPrice={setTotalPrice}
                />
              </div>
            ))}
          </div>
          <TotalPrice totalPrice={totalPrice} />
        </Container>
      ) : (
        <Container>
          <div className="row">
            {productList.map((product) => (
              <div
                key={product.id}
                className="col-12 col-sm-12 col-md-4 col-lg-3"
              >
                <ProductCard
                  product={product}
                  getProducts={getProducts}
                  setCountProduct={setCountProduct}
                  setTotalPrice={setTotalPrice}
                />
              </div>
            ))}
          </div>
          <TotalPrice totalPrice={totalPrice} />
        </Container>
      )}
    </Container>
  );
};

export default Products;
