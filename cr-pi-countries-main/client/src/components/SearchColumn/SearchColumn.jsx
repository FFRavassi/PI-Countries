import React from "react";
import { useDispatch } from "react-redux";

import { getCountriesByName } from "../../Redux/Actions/countriesActions";

import style from "./SearchColumn.module.css";

function SearchColumn() {
  const dispatch = useDispatch();

  const [searchString, setSearchString] = React.useState("");

  const searcher = (e) => {
    setSearchString(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getCountriesByName(searchString.trim()));
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Search country:</p>
          <input
            value={searchString}
            onChange={searcher}
            type="text"
            id="search"
          />
          <button>Search</button>
        </div>
        <div>
          <p>Filter countries by continent:</p>
          <div>
            <input type="checkbox" id="all" />
            <label htmlFor="all">All</label>
          </div>
          <div>
            <input type="checkbox" id="africa" />
            <label htmlFor="africa">Africa</label>
          </div>
          <div>
            <input type="checkbox" id="america" />
            <label htmlFor="america">America</label>
          </div>
          <div>
            <input type="checkbox" id="asia" />
            <label htmlFor="asia">Asia</label>
          </div>
          <div>
            <input type="checkbox" id="europe" />
            <label htmlFor="europe">Europe</label>
          </div>
          <div>
            <input type="checkbox" id="oceania" />
            <label htmlFor="oceania">Oceania</label>
          </div>
        </div>
        <div>
          <p>Filter countries by activity:</p>
          <div>
            <select name="activities" id="selectAct">
              <option value="">--Choose an activity--</option>
            </select>
          </div>
        </div>
        <div>
          <p>Sort countries by:</p>
          <div>
            <input type="radio" id="nameAsc" name="drone" value="nameAsc" />
            <label htmlFor="nameAsc">Name Asc</label>
          </div>
          <div>
            <input type="radio" id="nameDesc" name="drone" value="nameDesc" />
            <label htmlFor="nameDesc">Name Desc</label>
          </div>
          <div>
            <input type="radio" id="PopAsc" name="drone" value="PopAsc" />
            <label htmlFor="PopAsc">Population Asc</label>
          </div>
          <div>
            <input type="radio" id="PopDesc" name="drone" value="PopDesc" />
            <label htmlFor="PopDesc">Population Desc</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchColumn;
