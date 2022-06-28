import React, { useState } from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";

function Card(props) {
  const dispatch = useDispatch();

  function addtocart(product) {
    alert(product.name + " " + "Added to Cart");
    dispatch(add(product));
  }
  return (
    <div className="card">
      <div className="food-image">
        <img src={props.data.pic} className="food-logo" alt="food-image" />
      </div>
      <div>
        <span className="food-name">{props.data.name}</span>
        <br />
        <span className="food-price">Price:{props.data.price}</span>
      </div>
      <div>
        <button
          className="in-btn add-to-cart-btn"
          onClick={(product) => addtocart(props.data)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
