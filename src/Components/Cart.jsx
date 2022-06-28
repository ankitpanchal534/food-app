import React from "react";
import CartCard from "./CartCard";
import "./Cart.css";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="all-products-in-cart">
      {cartItems < 1 ? (
        <div className="cart-empty-msg">Your Cart is Empty</div>
      ) : (
        cartItems.map((product, i) => <CartCard key={i} data={product} />)
      )}
      <div className="final-bill">
        <button>Pay & Checkout</button>
      </div>
    </div>
  );
}
