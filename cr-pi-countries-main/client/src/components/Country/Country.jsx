import React from "react";
import { Link } from "react-router-dom";

import style from "./Country.module.css";

function Country(props) {
  return (
    <div className={style.container}>
      <img src={props.flag} />
      <h2>{props.name}</h2>
      {props.continent == "North America" ||
      props.continent == "South America" ? (
        <p>America</p>
      ) : (
        <p>{props.continent}</p>
      )}

      <Link to={`/home/${props.id}`}>
        <button id="more">See more</button>
      </Link>
    </div>
  );
}

export default Country;
