import React from "react";
import SearchColumn from "../../components/SearchColumn/SearchColumn";
import Countries from "../../components/Countries/Countries";

import style from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={style.union}>
      <SearchColumn />
      <Countries />
    </div>
  );
}

export default HomePage;
