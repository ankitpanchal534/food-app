import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="home-page">
        <p className="welcome">
          Welcome to Food's<br></br>Kitchen
        </p>
        <NavLink to="menu">
          <button className="go-btn">GO TO MENU</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
