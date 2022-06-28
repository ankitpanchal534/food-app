import React, { useState } from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";

function CartCard(props) {
  const dispatch = useDispatch();

  let [quantity, setQuantity] = useState(1);
  const addQuantity = (product) => {
    // console.log(product);
    setQuantity(quantity + 1);
    // product.quantity = product.quantity + 1;
  };
  const deleteQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const removeFromCart = (product) => {
    dispatch(remove(product.name));
  };
  return (
    <div className="card">
      <div className="food-image">
        <img src={props.data.pic} className="food-logo" alt="food-image" />
      </div>
      <div>
        <span className="food-name">{props.data.name}</span>
        <br />
        <span className="food-price">Price:{props.data.price}</span>
        <span className="food-quantity">Quantity:{quantity}</span>
      </div>
      <div>
        <button
          className="in-btn card-btn"
          onClick={(product) => addQuantity(props.data)}
        >
          +
        </button>
        <button
          className="de-btn card-btn"
          onClick={(product) => deleteQuantity(props.data)}
        >
          -
        </button>
        <button
          className="in-btn remove-to-cart-btn"
          onClick={(product) => removeFromCart(props.data)}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CartCard;
