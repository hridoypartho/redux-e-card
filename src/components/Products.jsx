import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="productsWrapper">
      {products.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt="cart" />
          <h4>{item.title}</h4>
          <h5>{item.price}</h5>
          <button className="btn">Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
