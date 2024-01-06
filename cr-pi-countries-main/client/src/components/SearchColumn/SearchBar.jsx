import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountriesByName,
  getAllCountries,
} from "../../Redux/Actions/countriesActions";

import style from "./SearchBar.module.css";

function SearchBar({ setSelectedCountry }) {
  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.allCountries);

  const [searchString, setSearchString] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchString === "") {
      alert("There are no countries typed");
    }

    const toSearch = searchString.toLowerCase();

    const validation = allCountries.filter((country) =>
      country.name.toLowerCase().includes(toSearch)
    );

    if (validation.length < 1) {
      return alert("The country you are searching for doesn't exist");
    } else {
      dispatch(getCountriesByName(searchString));
      setSelectedCountry(validation[0]);
    }
    setSearchString("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchString(e.target.value.trim());
  };

  return (
    <>
      <button
        className={style.button}
        onClick={() => dispatch(getAllCountries())}
      >
        Restart
      </button>
      <form className={style.searcher} onSubmit={handleSubmit}>
        <label>Search country:</label>
        <div className={style.bar}>
          <input className={style.bar1}
            type="text"
            id="search"
            value={searchString}
            onChange={handleChange}
          />
          <input className={style.bar2} type="submit" id="search" value="Search" />
        </div>
      </form>
    </>
  );
}

export default SearchBar;
