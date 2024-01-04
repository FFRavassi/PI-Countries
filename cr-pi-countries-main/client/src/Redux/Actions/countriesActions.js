import axios from "axios";

import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRIES_BY_ID,
  FILTER_BY_CONTINENT,
  SORT_BY_ABC,
  SORT_BY_POPULATION,
  FILTER_PAGE,
} from "./action-types";

export function getAllCountries() {
  try {
    return async function (dispatch) {
      const { data } = await axios("http://localhost:3001/countries");
      return dispatch({
        type: GET_ALL_COUNTRIES,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
}

export function getCountriesByName(name) {
  try {
    return async function (dispatch) {
      const { data } = await axios(
        `http://localhost:3001/countries?name=${name}`
      );
      return dispatch({
        type: GET_COUNTRIES_BY_NAME,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
}

export function getCountriesById(id) {
  return async function (dispatch) {
    try {
      const { data } = await axios(`http://localhost:3001/countries/${id}`);
      return dispatch({
        type: GET_COUNTRIES_BY_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function filterByContinent(continent) {
  return async function (dispatch) {
    try {
      dispatch({ type: FILTER_BY_CONTINENT, payload: continent });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function sortByAbc(order) {
  return async function (dispatch) {
    try {
      dispatch({ type: SORT_BY_ABC, payload: order });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function sortByPopulation(orderPop) {
  return async function (dispatch) {
    try {
      dispatch({ type: SORT_BY_POPULATION, payload: orderPop });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function filterPage(number) {
  return async function (dispatch) {
    try {
      dispatch({ type: FILTER_PAGE, payload: number });
    } catch (error) {
      console.log(error.message);
    }
  };
}
