import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const selector = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" className="logo">
        REDUX STOR
      </Link>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">cart item: {selector.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
