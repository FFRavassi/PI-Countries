import React from "react";

import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div>
      <div className={style.contact}>
        <button className={style.button1}>LinkedIn</button>
        <button className={style.button2}>GitHub</button>
      </div>

      <div className={style.start}>
        <img
          className={style.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/5/50/Earth_clip_art.svg"
          alt="logo"
          width="10%"
        ></img>
        <button className={style.button2}>Start</button>
      </div>
    </div>
  );
};

export default Landing;
