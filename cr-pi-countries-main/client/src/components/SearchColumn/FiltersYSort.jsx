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
  sortByAbc,
  sortByPopulation,
  filterByContinent,
} from "../../Redux/Actions/countriesActions";
import { filterByActivity } from "../../Redux/Actions/activitiesActions";

// import style from "./filtersYSort.module.css";

function FiltersYSort() {
  const dispatch = useDispatch();

  const allActivities = useSelector((state) => state.allActivities);

  function handleContinentFilter(e) {
    const selection = e.target.value;
    if (selection !== "select") {
      dispatch(filterByContinent(selection));
    }
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
    if (selection !== "select") {
      dispatch(filterByActivity(selection));
    }
  }

  return (
    <div>
      <div>
        <div>
          <p>Filter countries by continent:</p>
          <select
            name="selectContinent"
            defaultValue="select"
            onChange={handleContinentFilter}
          >
            <option value="select" disabled hidden>
              --Select a continent--
            </option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>

        <div>
          <p>Filter countries by activity:</p>
          <select
            name="activities"
            defaultValue="select"
            onChange={handleActivityFilter}
          >
            <option value="select" disabled hidden>
              --Select an activity--
            </option>
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

      <div>
        <p>Sort countries by:</p>
        <div>
          <input
            type="radio"
            id="nameAsc"
            name="sort"
            value="nameAsc"
            onChange={handleSortChange}
          />
          <label htmlFor="nameAsc">Name Asc</label>
        </div>
        <div>
          <input
            type="radio"
            id="nameDesc"
            name="sort"
            value="nameDesc"
            onChange={handleSortChange}
          />
          <label htmlFor="nameDesc">Name Desc</label>
        </div>
        <div>
          <input
            type="radio"
            id="popAsc"
            name="sort"
            value="popAsc"
            onChange={handleSortChange}
          />
          <label htmlFor="popAsc">Population Asc</label>
        </div>
        <div>
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
