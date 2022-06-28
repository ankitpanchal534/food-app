import React from "react";
import "./Menu.css";
import Card from "./Card";
import Data from "./data.js";
function Menu() {
  return (
    <div className="menu">
      <div className="all-food-cards">
        {Data.map((data, i) => (
          <Card key={i} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
