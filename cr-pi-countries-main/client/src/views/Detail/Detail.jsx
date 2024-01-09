import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesById } from "../../Redux/Actions/countriesActions";

import style from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.countryById);

  React.useEffect(() => {
    dispatch(getCountriesById(id));
  }, [dispatch, id]);

  return (
    <div>
      <div className={style.container}>
        <div className={style.countDetails}>
          <div className={style.title}>
            <img
              src={countryData.flag}
              alt={`${countryData.name} flag`}
              width="200px"
            />

            {countryData.name >= 35 ? (
              <h1 className={style.h1Small}>{countryData.name}</h1>
            ) : (
              <h1 className={style.h1Large}>{countryData.name}</h1>
            )}
          </div>
          <div className={style.data}>
            {countryData.continent == "North America" ||
            countryData.continent == "South America" ? (
              <h4>Continent: America</h4>
            ) : (
              <h4>Continent: {countryData.continent}</h4>
            )}
            <h4>Subregion: {countryData.subregion}</h4>
            <h4>Capital: {countryData.capital}</h4>
            <h4>Area: {countryData.area} km2</h4>
            <h4>Population: {countryData.population}</h4>
          </div>
        </div>

        <div className={style.actContainer}>
          <h2>Activities</h2>
          {countryData.Activities.length === 0 ? (
            <h3 className={style.warning}>
              There are no activities created for this country
            </h3>
          ) : (
            <div className={style.listAct}>
              <>
                {countryData.Activities.map((act) => {
                  return (
                    <div key={act.name}>
                      <h3>{act.name}</h3>
                      <h4>
                        Difficulty:
                        {act.difficulty === 1 ? (
                          <span> Super Easy</span>
                        ) : act.difficulty === 2 ? (
                          <span> Easy</span>
                        ) : act.difficulty === 3 ? (
                          <span> Medium</span>
                        ) : act.difficulty === 4 ? (
                          <span> Hard</span>
                        ) : (
                          <span> Super Hard</span>
                        )}
                      </h4>
                      <h4>
                        Duration:
                        <span> {act.duration} hs</span>
                      </h4>
                      <h4>
                        Season:
                        <span>{act.season.map((el) => ` ${el} `)}</span>
                      </h4>
                    </div>
                  );
                })}
              </>
            </div>
          )}
        </div>
      </div>
      <button className={style.button} onClick={() => navigate("/home")}>
        ↩
      </button>
    </div>
  );
}

export default Detail;
