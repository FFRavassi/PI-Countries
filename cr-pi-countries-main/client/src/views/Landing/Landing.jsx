import React from "react";
import { Link } from "react-router-dom";

// import style from "./Landing.module.css";

function Landing() {
  return (
    <>
      <div>
        <Link to="https://linkedin.com/in/francesco-ravassi">
          <button id="linkedin">LinkedIn</button>
        </Link>
        <Link to="https://github.com/FFRavassi">
          <button id="github">GitHub</button>
        </Link>
      </div>

      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/50/Earth_clip_art.svg"
          alt="logo"
          width="10%"
        />
        <Link to="/home">
          <button id="start">Start</button>
        </Link>
      </div>
    </>
  );
}

export default Landing;
