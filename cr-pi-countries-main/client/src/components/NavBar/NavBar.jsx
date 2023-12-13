import React from "react";

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
        <button>Home</button>
        <button>Add Activity</button>
        <button>Out</button>
      </div>
    </div>
  );
};

export default NavBar;
