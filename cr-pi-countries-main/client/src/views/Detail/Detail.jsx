import React from "react";

import style from "./Detail.module.css";

const Detail = () => {
  return (
    <div className={style.container}>
      <div className={style.right}>
        <div className={style.name}>
          <p>Country Name</p>
        </div>
        <div className={style.data}>
          <ul>
            <li>Continent: </li>
          </ul>
          <ul>
            <li>Subregion: </li>
          </ul>
          <ul>
            <li>Capital: </li>
          </ul>
          <ul>
            <li>Population: </li>
          </ul>
          <ul>
            <li>Area: </li>
          </ul>
        </div>
      </div>
      <div className={style.activities}>
        <p>Activities</p>
      </div>
    </div>
  );
};

export default Detail;
