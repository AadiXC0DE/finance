import React from "react";
import "./Navbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MessageIcon from "@mui/icons-material/Message";
import human from "./human.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <input className="search" placeholder="Search here.."></input>
      <div className="nav_right">
        <div className="icons">
          <NotificationsNoneIcon />
        </div>
        <div className="icons">
          <MessageIcon />
        </div>
        <img className="nav_human" src={human}></img>
      </div>
    </div>
  );
};

export default Navbar;
