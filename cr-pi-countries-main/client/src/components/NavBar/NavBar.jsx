import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import style from "./NavBar.module.css";

function NavBar() {
  const history = useNavigate();
  const location = useLocation();

  const refresh = () => {
    location.pathname === "/home" ? history(0) : history("/home");
  };

  return (
    <div className={style.container}>
      <img
        className={style.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/5/50/Earth_clip_art.svg"
        alt="logo"
        width="7%"
      />
      <div className={style.buttonsCont}>
        <Link to="/home">
          <button className={style.buttons} id="home" onClick={refresh}>
            Home
          </button>
        </Link>

        <Link to="/activities">
          <button className={style.buttons} id="add">
            Add Activity
          </button>
        </Link>

        <Link to="/">
          <button className={style.buttons} id="out">
            Out
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
