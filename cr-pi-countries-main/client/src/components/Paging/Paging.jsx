import React from "react";
import { useDispatch } from "react-redux";
import { filterPage } from "../../Redux/Actions/countriesActions";

// import style from "./Paging.module.css";

function Paging({ allCountries, countriesPerPage }) {
  const dispatch = useDispatch();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <button
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
