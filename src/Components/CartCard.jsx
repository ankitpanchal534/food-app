import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addQ, removeQ, remove } from "../Store/cartSlice";
import "./CartCard.css";

function CartCard(props) {
  const dispatch = useDispatch();

  const addQuantity = (product) => {
    dispatch(addQ(product));
  };

  const deleteQuantity = (product) => {
    dispatch(removeQ(product));
  };
  const deleteFromCart = (product) => {
    dispatch(remove(product.name));
  };
  return (
    <div className="card-for-cart">
      <div className="CartCard">
        <div className="food-details">
          <img
            src={props.data.pic}
            className="Cart-food-logo"
            alt="food-image"
          />
          <div>
            <span className="food-name"> {props.data.name}</span>
            <p className="Cart-food-desc">{props.data.description}</p>
          </div>
          <span className="Cart-food-price">
            <b>Price:{props.data.price}</b>
          </span>
          {props.data.quantity > 0 ? (
            <div>
              &nbsp;&nbsp;
              <span className="food-quantity">
                Quantity:{props.data.quantity}
              </span>
              &nbsp;&nbsp;
              <span className="food-price">
                Cost:{props.data.price * props.data.quantity}
              </span>
            </div>
          ) : (
            ""
          )}
          <div className="cart-button">
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
              className="delete-from-cart"
              onClick={(product) => deleteFromCart(props.data)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
