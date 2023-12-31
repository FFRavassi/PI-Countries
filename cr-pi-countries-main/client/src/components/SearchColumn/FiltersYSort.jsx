import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ASCENDING,
  DESCENDING,
  POPASC,
  POPDESC,
} from "../../Redux/sortConsts/sortConsts";
import {
  getAllCountries,
  filterByContinent,
  sortByAbc,
  sortByPopulation,
} from "../../Redux/Actions/countriesActions";
import {
  filterByActivity,
  getAllActivities,
} from "../../Redux/Actions/activitiesActions";

import style from "./filtersYSort.module.css";

function FiltersYSort() {
  const dispatch = useDispatch();

  React.useState(() => {
    dispatch(getAllActivities());
  }, []);

  const allActivities = useSelector((state) => state.allActivities);

  function handleContinentFilter(e) {
    const selection = e.target.value;
    if (selection === "All") {
      dispatch(getAllCountries());
    }
    dispatch(filterByContinent(selection));
  }

  function handleSortChange(e) {
    const selection = e.target.value;
    if (selection === "nameAsc") {
      dispatch(sortByAbc(ASCENDING));
    } else if (selection === "nameDesc") {
      dispatch(sortByAbc(DESCENDING));
    } else if (selection === "popAsc") {
      dispatch(sortByPopulation(POPDESC));
    } else {
      dispatch(sortByPopulation(POPASC));
    }
  }

  function handleActivityFilter(e) {
    const selection = e.target.value;
    if (selection === "all") {
      dispatch(filterByActivity(allActivities));
    } else if (selection !== "select" && selection !== "all") {
      dispatch(filterByActivity(selection));
    }
  }

  return (
    <div className={style.container}>
      <div>
        <div className={style.continentCont}>
          <p>Filter countries by continent:</p>
          <select
            name="selectContinent"
            defaultValue="all"
            onChange={handleContinentFilter}
          >
            <option value="allContinents">All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>

        <div className={style.continentCont}>
          <p>Filter countries by activity:</p>
          <select
            name="activities"
            defaultValue="select"
            onChange={handleActivityFilter}
          >
            <option value="select" disabled hidden>
              --Select an activity--
            </option>
            <option value="all">All</option>
            {allActivities &&
              allActivities.map((act) => (
                <option value={act.name} key={act.id}>
                  {act.name}
                </option>
              ))}
          </select>
        </div>
      </div>

      <hr />

      <div className={style.sortContainer}>
        <p>Sort countries by:</p>
        <div className={style.radio}>
          <input
            type="radio"
            id="nameAsc"
            name="sort"
            value="nameAsc"
            onChange={handleSortChange}
          />
          <label htmlFor="nameAsc">Name Asc</label>
        </div>
        <div className={style.radio}>
          <input
            type="radio"
            id="nameDesc"
            name="sort"
            value="nameDesc"
            onChange={handleSortChange}
          />
          <label htmlFor="nameDesc">Name Desc</label>
        </div>
        <div className={style.radio}>
          <input
            type="radio"
            id="popAsc"
            name="sort"
            value="popAsc"
            onChange={handleSortChange}
          />
          <label htmlFor="popAsc">Population Asc</label>
        </div>
        <div className={style.radio}>
          <input
            type="radio"
            id="popDesc"
            name="sort"
            value="popDesc"
            onChange={handleSortChange}
          />
          <label htmlFor="popDesc">Population Desc</label>
        </div>
      </div>
    </div>
  );
}

export default FiltersYSort;
