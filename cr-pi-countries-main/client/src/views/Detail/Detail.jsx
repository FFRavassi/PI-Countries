import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getCountriesById } from "../../Redux/Actions/countriesActions";

import style from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.detailsById);
  Object.values(countryData);
  const { id } = useParams();

  console.log(countryData);

  React.useEffect(() => {
    dispatch(getCountriesById(id));
  }, [dispatch, id]);

  return (
    <div className={style.container}>
      <div className={style.right}>
        <div className={style.nameFlagContainer}>
          <img
            className={style.flag}
            src={countryData.flag}
            alt={`${countryData.name} flag`}
          />
          <h1 className={style.name}>{countryData.name}</h1>
        </div>
        <div className={style.data}>
          <ul>
            <li>Continent: {countryData.continent} </li>
          </ul>
          <ul>
            <li>Subregion: {countryData.subregion} </li>
          </ul>
          <ul>
            <li>Capital: {countryData.capital} </li>
          </ul>
          <ul>
            <li>Population: {countryData.population} </li>
          </ul>
          <ul>
            <li>Area: {countryData.area} </li>
          </ul>
        </div>
      </div>
      <div className={style.activitiesContainer}>
        <h3>Activities</h3>
        <div>
          <div className={style.actSpace}>
            {countryData.Activities && (
              <>
                {countryData.Activities.map((act) => {
                  return (
                    <div key={act.id} className={style.eachAct}>
                      <h4>{act.name}</h4>
                      <div>
                        <p className={style.actValue}>
                          Difficulty:
                          <span> {act.difficulty}</span>
                        </p>
                        <p className={style.actValue}>
                          Duration:
                          <span> {act.duration} hs</span>
                        </p>
                        <p className={style.actValue}>
                          Season:
                          <span>{act.season.map((el) => ` ${el}/`)}</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
            {!countryData.Activities && (
              <div>
                <p className={style.notFound}>
                  There are no activities created for this country
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
