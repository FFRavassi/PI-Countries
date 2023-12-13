import React from "react";

import style from "./FormActivities.module.css";

const FormActivities = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>New Activity</h1>
      <div className={style.fila1}>
        <div>
          <h3>Name:</h3>
          <input type="text"></input>
        </div>
        <div>
          <h3>Duration:</h3>
          <input
            type="number"
            step="0.5"
            min="0"
            max="24"
            placeholder=" Max:24 hours"
          ></input>
        </div>
        <div>
          <h3>Select countries:</h3>
          <input type="search"></input>
        </div>
        <div>
          <h3>Selected countries</h3>
          <button>Create Activity</button>
        </div>
      </div>
      <div className={style.fila2}>
        <div className={style.difficulty}>
          <h3>Difficulty:</h3>
          <input type="range" min="0" max="4"></input>
        </div>
        <div className={style.seasons}>
          <h3>Season:</h3>
          <div>
            <input
              type="checkbox"
              id="summer"
              name="season1"
              value="summer"
            ></input>
            <label for="summer">Summer</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="autum"
              name="season2"
              value="autum"
            ></input>
            <label for="autum">Autum</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="winter"
              name="season3"
              value="winter"
            ></input>
            <label for="winter">Winter</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="spring"
              name="season4"
              value="spring"
            ></input>
            <label for="spring">Spring</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormActivities;
