import React from "react";
import { Link } from "react-router-dom";

import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.container}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/50/Earth_clip_art.svg"
        alt="logo"
        width="5%"
      ></img>
      <div className={style.buttons}>
        <Link to="/home">
          <button id="home">Home</button>
        </Link>

        <Link to="/activities">
          <button id="add">Add Activity</button>
        </Link>

        <Link to="/">
          <button id="out">Out</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
