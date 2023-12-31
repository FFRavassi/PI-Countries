import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPage } from "../../Redux/Actions/countriesActions";

import style from "./Paging.module.css";

function Paging({ allCountries, countriesPerPage }) {
  const dispatch = useDispatch();

  var activePage = useSelector((state) => state.activePage);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className={style.container}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <button
              className={
                activePage != number ? `${style.page}` : `${style.ActivePg}`
              }
              key={number}
              type="button"
              onClick={() => dispatch(filterPage(number))}
            >
              {number}
            </button>
          ))}
      </div>
    </nav>
  );
}

export default Paging;
