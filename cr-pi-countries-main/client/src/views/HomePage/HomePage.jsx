import React from "react";
import SearchColumn from "../../components/SearchColumn/SearchColumn";
import Countries from "../../components/Countries/Countries";
import Paging from "../../components/Paging/Paging";

import style from "./HomePage.module.css";

//rfce
const HomePage = () => {
  return (
    <div>
      <div className={style.union}>
        <SearchColumn />
        <div>
          <Countries />
          <Paging />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
