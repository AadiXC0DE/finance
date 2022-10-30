import React from "react";
import logo from "./logo.png";
import "./Menu.css";

const menu = () => {
  return (
    <div>
      <div className="logo_main">
        <img src={logo} className="logo"></img>
      </div>
    </div>
  );
};

export default menu;
