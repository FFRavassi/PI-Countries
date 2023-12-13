import React from "react";
import Country from "../Country/Country";

import style from "./Countries.module.css";

const Countries = () => {
  return (
    <div className={style.disposition}>
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
    </div>
  );
};

export default Countries;
