import React from "react";

import style from "./SearchColumn.module.css";

function SearchColumn() {
  return (
    <div className={style.container}>
      <div>
        <p>Search country:</p>
        <input type="text" />
      </div>
      <div>
        <p>Filter countries by continent:</p>
        <div>
          <input type="checkbox" />
          <label>Africa</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>America</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Asia</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Europe</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Oceania</label>
        </div>
      </div>
      <div>
        <p>Filter countries by activity:</p>
        <div>
          <select name="activities">
            <option value="">--Choose an activity--</option>
          </select>
        </div>
      </div>
      <div>
        <p>Sort countries by:</p>
        <div>
          <input type="radio" id="nameAsc" name="drone" value="nameAsc" />
          <label>Name Asc</label>
        </div>
        <div>
          <input type="radio" id="nameDesc" name="drone" value="nameDesc" />
          <label>Name Desc</label>
        </div>
        <div>
          <input type="radio" id="PopAsc" name="drone" value="PopAsc" />
          <label>Population Asc</label>
        </div>
        <div>
          <input type="radio" id="PopDesc" name="drone" value="PopDesc" />
          <label>Population Desc</label>
        </div>
      </div>
    </div>
  );
}

export default SearchColumn;
