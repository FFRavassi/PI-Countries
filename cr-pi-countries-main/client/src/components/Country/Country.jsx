import React from "react";

import style from "./Country.module.css";

const Country = () => {
  return (
    <div className={style.container}>
      <img></img>
      <h2>NAME</h2>
      <p>Continent: </p>
      <button>See more</button>
    </div>
  );
};

export default Country;
