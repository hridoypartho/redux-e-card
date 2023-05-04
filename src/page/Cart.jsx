import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (itmeId) => {
    dispatch(remove(itmeId));
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((item) => (
          <div className="cartCard" key={item.id}>
            <img src={item.image} alt="img" />
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button onClick={() => handleRemove(item.id)} className="btn">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
