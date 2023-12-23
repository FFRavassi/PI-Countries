import axios from "axios";
import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRIES_BY_ID,
} from "./action-types";

export function getAllCountries() {
  return async function (dispatch) {
    const { data } = await axios("http://localhost:3001/countries");
    return dispatch({
      type: GET_ALL_COUNTRIES,
      payload: data,
    });
  };
}

export function getCountriesByName(name) {
  return async function (dispatch) {
    const { data } = await axios(
      `http://localhost:3001/countries?name=${name}`
    );
    return dispatch({
      type: GET_COUNTRIES_BY_NAME,
      payload: data,
    });
  };
}

export function getCountriesById(id) {
  return async function (dispatch) {
    const { data } = await axios(`http://localhost:3001/countries/${id}`);
    return dispatch({
      type: GET_COUNTRIES_BY_ID,
      payload: data,
    });
  };
}
