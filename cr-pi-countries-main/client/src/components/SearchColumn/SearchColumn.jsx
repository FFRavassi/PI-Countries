import React from "react";
import SearchBar from "./SearchBar";
import FiltersYSort from "./FiltersYSort";

// import style from "./SearchColumn.module.css";

function SearchColumn() {
  const [selectedCountry, setSelectedCountry] = React.useState({});

  return (
    <div>
      <SearchBar setSelectedCountry={setSelectedCountry} />
      <FiltersYSort />
    </div>
  );
}

export default SearchColumn;
