import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="heading">
      <h2>Wellcome to Redux toolkit Store</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
