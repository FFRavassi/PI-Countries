import React from "react";

import style from "./FormActivities.module.css";

const FormActivities = () => {
  return (
    <form className={style.container}>
      <h1 className={style.title}>New Activity</h1>
      <div className={style.fila1}>
        <div>
          <h3>Name:</h3>
          <input id="name" type="text" autoComplete="off"></input>
        </div>
        <div>
          <h3>Duration:</h3>
          <input
            id="duration"
            type="number"
            step="0.5"
            min="0"
            max="24"
            placeholder=" Max:24 hours"
          ></input>
        </div>
        <div>
          <h3>Select countries:</h3>
          <input id="countriesSelect" type="search"></input>
        </div>
        <div>
          <h3>Selected countries</h3>
          <button id="create">Create Activity</button>
        </div>
      </div>
      <div className={style.fila2}>
        <div className={style.difficulty}>
          <h3>Difficulty:</h3>
          <input id="difficulty" type="range" min="0" max="4"></input>
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
            <label htmlFor="summer">Summer</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="autum"
              name="season2"
              value="autum"
            ></input>
            <label htmlFor="autum">Autum</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="winter"
              name="season3"
              value="winter"
            ></input>
            <label htmlFor="winter">Winter</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="spring"
              name="season4"
              value="spring"
            ></input>
            <label htmlFor="spring">Spring</label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormActivities;
