import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ImSpoonKnife } from "react-icons/im";
import { HiShoppingCart } from "react-icons/hi";
import "./Header.css";

function Header() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <header className="header-content">
      <div>
        <NavLink to="/" className="Navlink-header">
          <h2>
            <ImSpoonKnife /> Food's Restaurant
          </h2>
        </NavLink>
      </div>
      <div>
        <NavLink to="/cart" className="Navlink-header">
          <h2>
            <HiShoppingCart />
            <div className="cart-length-circle">{cartItems.length}</div>
          </h2>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
