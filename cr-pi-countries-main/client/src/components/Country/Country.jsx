import React from "react";
import { Link } from "react-router-dom";

import style from "./Country.module.css";

const Country = (props) => {
  return (
    <div className={style.container}>
      <img src={props.flag} />
      <h2>{props.name}</h2>
      <p> {props.continent}</p>

      <Link to={`/home/${props.id}`}>
        <button id="more" className={style.button1}>
          See more
        </button>
      </Link>
    </div>
  );
};

export default Country;
