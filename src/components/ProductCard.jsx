import React, { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FaPlus, FaMinus } from "react-icons/fa";
import iziToast from "izitoast";

const arr = []; //!ürünleri sepette tutacak array
const FREE_SHIPPING_LIMIT = 2000;
const SHIPPING_PRICE = 25;
const TAX_RATE = 0.18;
const ProductCard = ({
  product,
  getProducts,
  setCountProduct,
  setTotalPrice,
}) => {
  //!-------------indirimli fiyat değişkeni------------------
  let discountedPrice = Number(
    product.price - product.price * (product.dampingRate / 100)
  ).toFixed(2);

  //!--------------ürün fiyatının ilk görünümü için veri saklama ve güncelleme-------------
  const [price, setPrice] = useState(discountedPrice);

  //!-----------Butonun fonksiyonuna göre miktar ayarlama ve hesaplama durumu---------------
  const handleAmount = (id, action) => {
    const badge = document.querySelector(`#amount${id}`);
    if (action === "plus" && badge.textContent <= product.amount) {
      badge.textContent++;
      handleUpdate(id, product.amount - Number(badge.textContent));
    } else if (action === "minus") {
      if (badge.textContent > 1) {
        badge.textContent--;
        handleUpdate(id, product.amount - Number(badge.textContent));
      }
    }
    calculate(badge.textContent); //?---ürün fiyatı hesaplama---
  };

  //!-----------------ürün fiyatı hesaplama----------------
  const calculate = (amount) => {
    const newPrice = amount * discountedPrice;
    setPrice(newPrice.toFixed(2));
    calculateTotalPrice();
  };

  //!--------------Toplam fiyatı hesaplama-------------
  const calculateTotalPrice = () => {
    const prices = document.querySelectorAll("#product-price");
    // console.log(prices);
    const sum = [...prices].reduce(
      (acc, cur) => acc + Number(cur.textContent),
      0
    );
    // console.log(sum);
    const shipping =
      sum >= FREE_SHIPPING_LIMIT || sum === 0 ? 0.0 : SHIPPING_PRICE;
    const tax = sum * TAX_RATE;
    const total = sum + shipping + tax;
    const selectedprice = sum;
    setTotalPrice({ subtotal: selectedprice, tax, shipping, total });
  };

  //!---------------API de miktarı güncellemek için put isteği--------------
  const handleUpdate = async (id, amount) => {
    try {
      await axios.put(
        `https://661248a395fdb62f24ee586e.mockapi.io/products/${id}`,
        { amount }
      );
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  //!---------------ürün silme ve api'ye delete isteği---------------
  const handleRemove = async (id) => {
    try {
      await axios.delete(
        `https://661248a395fdb62f24ee586e.mockapi.io/products/${id}`
      );
      getProducts();
      //?-----------ürün listeden silme için if bloğu ve navbar sepette miktarı güncelleme-------
      if (arr.includes(id)) {
        const index = arr.indexOf(id);
        arr.splice(index, 1);
        setCountProduct(arr.length);
        // calculateTotalPrice();
        // console.log(arr);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //!------------Listeye ürün ekleme ve navbar sepette miktarı güncelleme------------
  const handleCartCount = (id) => {
    if (!arr.includes(id)) {
      arr.push(id);
      console.log(arr);
      setCountProduct(arr.length);
    } else {
      iziToast.show({
        title: "Warning!",
        message: "You have already added this item",
        position: "topRight",
        timeout: 3000,
      });
    }
  };

  return (
    <Container className="d-flex mt-2">
      <Card style={{ width: "18rem"}}>
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.image}
          style={{ objectFit:"contain"}}
          height={"200px"}
        />
        <Card.Body className="text-center">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className="d-flex justify-content-evenly fw-bolder fs-5">
           <span className="border border-2 rounded-2 p-1 text-bg-warning">{(
              product.price -
              product.price * (product.dampingRate / 100)
            ).toFixed(2)}
            ${" "}</span> 
            <span className="text-decoration-line-through border border-2 rounded-2 p-1 text-bg-secondary">
              {product.price}$
            </span>
          </Card.Text>
          <Card.Text>
            <FaMinus
              id={`minus${product.id}`}
              type="button"
              className="border border-1 rounded-2 fs-3 minus bg-danger text-light"
              onClick={() => handleAmount(product.id, "minus")}
            />{" "}
            <span
              id={`amount${product.id}`}
              className="badge rounded-circle bg-success fs-6"
            >
              {1}
            </span>{" "}
            <FaPlus
              id={`plus${product.id}`}
              type="button"
              className="border border-1 rounded-2 fs-3 plus bg-primary text-light"
              onClick={() => handleAmount(product.id, "plus")}
            />
          </Card.Text>
          <Card.Text className="d-flex justify-content-evenly">
            <Button variant="danger" onClick={() => handleRemove(product.id)}>
              Remove
            </Button>
            <Button
              variant="primary"
              onClick={() => handleCartCount(product.id)}
            >
              Add to Cart
            </Button>
          </Card.Text>
          <Card.Text>
            <span className="fw-bold ">Total:</span> <span id="product-price">{price}</span>$
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductCard;
