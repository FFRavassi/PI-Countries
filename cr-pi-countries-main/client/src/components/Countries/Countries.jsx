import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../Redux/Actions/countriesActions";
import Country from "../Country/Country";
import Paging from "../Paging/Paging";

import style from "./Countries.module.css";

function Countries() {
  const allCountries = useSelector((state) => state.filteredCountries);

  const dispatch = useDispatch();

  const [selectedContinent, setSelectedContinent] = React.useState("");
  const [selectedActivity, setSelectedActivity] = React.useState("");
  const [countriesWithAct, setCountriesWithAct] = React.useState([]);

  React.useEffect(() => {
    dispatch(getAllCountries());
    // Si quisiera ejecutar una función cuando se desmonte mi componente:
    // return () => {
    //   clearList();
    // };
  }, [dispatch, selectedContinent, selectedActivity]);

  React.useEffect(() => {
    if (selectedActivity) {
      const filteredByAct = allCountries.filter((count) =>
        count.activities.includes(selectedActivity)
      );
      setCountriesWithAct(filteredByAct);
    } else {
      setCountriesWithAct(allCountries);
    }
  }, [allCountries, selectedActivity]);

  const filteredCountries = allCountries.filter((count) => {
    if (selectedContinent && count.continent !== selectedContinent) {
      return false;
    }
    if (selectedActivity && !count.activities.includes(selectedActivity)) {
      return false;
    }
    return true;
  });

  //! Para poder guardar el estado en un momento determinado (por ejemplo con los filtros).
  //! const contexto = React.createContext(filteredCountries);

  // Estado local 'currentPage' que hace referencia a la pagina actual en la que nos encontramos,
  // inicia en la primera (1).
  const currentPage = useSelector((state) => state.activePage);

  const [countriesPerPage] = React.useState(10);

  // Se calcula el numero (respecto del total de paises) del ultimo pais de cada pagina.
  //Ej: 5 (pg actual) * 10 = 50 (n° del ultimo país de la pg actual respecto del total de paises).
  const indexLastCountryInThePg = currentPage * countriesPerPage;

  // Se calcula el numero (respecto del total de paises) del primer pais de cada pagina.
  //Ej: 50 (n° del ultimo pais de la pg actual) - 10 = 40 (n° del primer pais de la pg actual)
  const indexFirstCountryInThePg = indexLastCountryInThePg - countriesPerPage;

  //Se toma del total de paise una seccion que comienza en el primer pais de la pg y termina en el
  // ultimo paise de la pg.
  const currentCountries = filteredCountries.slice(
    indexFirstCountryInThePg,
    indexLastCountryInThePg
  );

  return (
    <div>
      <div className={style.disposition}>
        {currentCountries.map((count) => (
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
          />
        ))}
      </div>
      <div>
        <Paging
          countriesPerPage={countriesPerPage}
          allCountries={allCountries.length}
        />
      </div>
    </div>
  );
  contexto;
}

export default Countries;
