import React, { useState} from "react";
import NavBar from "./NavBar";
import Products from "./Products";
import Footer from "./Footer";

const Home = () => {
  const [countProduct, setCountProduct] = useState(0);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <NavBar countProduct={countProduct} toggle={toggle} setToggle={setToggle}/>
      <Products setCountProduct={setCountProduct} toggle={toggle} setToggle={setToggle}/>
      <Footer />
    </div>
  );
};

export default Home;
