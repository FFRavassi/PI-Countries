import React from "react";
import { Link } from "react-router-dom";

import style from "./Country.module.css";

function Country(props) {
  return (
    <div className={style.container}>
      <img src={props.flag} alt={props.name} />
      <div className={style.info}>
        {props.name <= 33 ? (
          <h2 className={style.shortName}>{props.name}</h2>
        ) : (
          <h2 className={style.longName}>{props.name}</h2>
        )}

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
    </div>
  );
}

export default Country;
