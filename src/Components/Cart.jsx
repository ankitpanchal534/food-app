import React, { useEffect } from "react";
import CartCard from "./CartCard";
import "./Cart.css";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);

  let cartPrice = cartItems.map((item, i) => item.price * item.quantity);
  let finalBill = 0;
  cartPrice.map((x) => (finalBill += x));

  return (
    <div className="cart-parent">
      <div className="all-products-in-cart">
        {cartItems < 1 ? (
          <div className="cart-empty-msg">Your Cart is Empty</div>
        ) : (
          cartItems.map((product, i) => <CartCard key={i} data={product} />)
        )}
      </div>
      {cartItems.length < 1 ? (
        " "
      ) : (
        <div className="final-bill">
          <button className="in-btn pay-btn">
            Pay Rs. <h2> {finalBill}</h2> & Checkout
          </button>
        </div>
      )}{" "}
    </div>
  );
}
