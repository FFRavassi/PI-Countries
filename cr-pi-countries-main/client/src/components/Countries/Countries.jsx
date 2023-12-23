import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Country from "../Country/Country";
import { getAllCountries } from "../../Redux/Actions/countriesActions";
import { getAllActivities } from "../../Redux/Actions/activitiesActions";

import style from "./Countries.module.css";

const Countries = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  //! const allActivities = useSelector((state) => state.allActivities);

  React.useEffect(() => {
    dispatch(getAllCountries());
    //! dispatch(getAllActivities());
    // Si quisiera ejecutar una función cuando se desmonte mi componente:
    // return () => {
    //   clearList();
    // };
  }, [dispatch]);

  const countriesList = allCountries;
  return (
    <div className={style.disposition}>
      {countriesList &&
        countriesList.map((count) => (
          <Country
            key={count.id}
            id={count.id}
            name={count.name}
            flag={count.flag}
            continent={count.continent}
            capital={count.capital}
            subregion={count.subregion}
            area={count.area}
            population={count.population}
            activities={count.activities}
          />
        ))}
    </div>
  );
};

export default Countries;
