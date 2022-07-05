import React, { useEffect, useState } from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";

function Card(props) {
  const [status, setStatus] = useState("Add to Cart");
  const [enable, setenable] = useState(false);
  const [changeClass, setChangeClass] = useState("in-btn add-to-cart-btn");
  const dispatch = useDispatch();

  function addtocart(product) {
    dispatch(add(product));
    setStatus("Added to Cart");
    setChangeClass("added-in-cart");
    setenable(!enable);
    alert(product.name + " " + "Added to Cart");
  }
  useEffect(() => {}, []);
  return (
    <div className="card">
      <div className="food-image">
        <img src={props.data.pic} className="food-logo" alt="food-image" />
      </div>
      <div>
        <span className="food-name">{props.data.name}</span>
        <br />
        <span className="food-price">Price:{props.data.price}</span>
        <br />
      </div>
      <div>
        <button
          disabled={enable}
          className={changeClass}
          onClick={(product) => addtocart(props.data)}
        >
          {status}
        </button>
      </div>
    </div>
  );
}

export default Card;
