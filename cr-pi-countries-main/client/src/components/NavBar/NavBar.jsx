import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function NavBar() {
  const history = useNavigate();
  const location = useLocation();

  const refresh = () => {
    location.pathname === "/home" ? history(0) : history("/home");
  };

  return (
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/50/Earth_clip_art.svg"
        alt="logo"
        width="5%"
      />
      <div>
        <Link to="/home">
          <button id="home" onClick={refresh}>
            Home
          </button>
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
}

export default NavBar;
