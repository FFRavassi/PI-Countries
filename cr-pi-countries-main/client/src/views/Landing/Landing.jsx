import React from "react";
import { Link } from "react-router-dom";

import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div>
      <div className={style.contact}>
        <Link to="https://linkedin.com/in/francesco-ravassi">
          <button id="linkedin" className={style.button1}>
            LinkedIn
          </button>
        </Link>
        <Link to="https://github.com/FFRavassi">
          <button id="github" className={style.button2}>
            GitHub
          </button>
        </Link>
      </div>

      <div className={style.start}>
        <img
          className={style.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/5/50/Earth_clip_art.svg"
          alt="logo"
          width="10%"
        ></img>
        <Link to="/home">
          <button id="start" className={style.button2}>
            Start
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
