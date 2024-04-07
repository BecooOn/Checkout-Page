import React, { useState} from "react";
import NavBar from "./NavBar";
import Products from "./Products";
import Footer from "./Footer";

const Home = () => {
  const [countProduct, setCountProduct] = useState(0);
  return (
    <div>
      <NavBar countProduct={countProduct}/>
      <Products setCountProduct={setCountProduct}/>
      <Footer />
    </div>
  );
};

export default Home;
