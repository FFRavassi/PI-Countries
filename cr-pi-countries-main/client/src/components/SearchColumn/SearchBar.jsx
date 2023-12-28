import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesByName } from "../../Redux/Actions/countriesActions";

// import style from "./SearchBar.module.css"

function SearchBar({ setSelectedCountry }) {
  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.allCountries);

  const [searchString, setSearchString] = React.useState("");

  const handleSubmit = async (e) => {
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
      await dispatch(getCountriesByName(searchString));
      setSelectedCountry(validation[0]);
    }
    setSearchString("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchString(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Search country:</label>
        <input
          type="text"
          id="search"
          value={searchString}
          onChange={handleChange}
        />
        <input type="submit" id="search" value="Search" />
      </form>
    </>
  );
}

export default SearchBar;
