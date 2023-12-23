// Importar las action-types
import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRIES_BY_ID,
  GET_ALL_ACTIVITIES,
} from "../Actions/action-types";

//Definir el initial state
const initialState = {
  allCountries: [],
  allActivities: [],
  detailsById: [],
};

//Definir la función rootReducer
export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: payload,
      };

    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        allCountries: payload,
      };

    case GET_COUNTRIES_BY_ID:
      return {
        ...state,
        detailsById: payload,
      };

    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        allActivities: payload,
      };

    default:
      return state;
  }
};
