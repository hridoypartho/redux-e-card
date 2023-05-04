import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">REDUX STOR</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">cart item: 0</span>
      </div>
    </div>
  );
};

export default Navbar;
