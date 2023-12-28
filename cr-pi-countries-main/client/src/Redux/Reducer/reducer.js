// Importar las action-types
import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  /* GET_COUNTRIES_BY_ID, */
  FILTER_BY_CONTINENT,
  SORT_BY_ABC,
  SORT_BY_POPULATION,
  FILTER_PAGE,
  GET_ALL_ACTIVITIES,
  POST_NEW_ACTIVITY,
  REMOVE_ACTIVITY,
  FILTER_BY_ACTIVITY,
} from "../Actions/action-types";

import { ASCENDING, DESCENDING, POPDESC } from "../sortConsts/sortConsts";

//Definir el initial state
const initialState = {
  allCountries: [],
  filteredCountries: [],
  allActivities: [], 
  activePage: 1,
};

//Definir la función rootReducer
export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Se obtienen los datos de los paises desde la API, y a su vez, sea actualiza el state con los datos obtenidos e se inicializa
    //"filteredCountries" con los mismos datos.
    case GET_ALL_COUNTRIES:
      let alphaDefault = payload.sort((a, b) => a.name.localeCompare(b.name));
      return {
        ...state,
        allCountries: alphaDefault,
        filteredCountries: alphaDefault,
      };

    // Se filtran los paises segun la busqueda que se quiera realizar. El nombre del pais se puede escribir en minusculas. Tambien
    // se actualiza el estado con los paises filtrados.
    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        filteredCountries: payload,
      };

    // Se filtran los paises segun continente, y se actualiza el estado con los paises filtrados.
    case FILTER_BY_CONTINENT:
      const continentFilter = state.allCountries.filter((country) =>
        country.continent[0].includes(payload)
      );
      return {
        ...state,
        filteredCountries: continentFilter,
        activePage: 1,
      };

    case SORT_BY_ABC:
      let sortedCountries = [...state.filteredCountries];
      if (payload === ASCENDING) {
        sortedCountries.sort((a, b) => a.name.localeCompare(b.name));
      } else if (payload === DESCENDING) {
        sortedCountries.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        filteredCountries: sortedCountries,
        activePage: 1,
      };

    case SORT_BY_POPULATION:
      let popOrder = [...state.filteredCountries];
      popOrder.sort((a, b) => {
        if (a.population < b.population) {
          return payload === POPDESC ? -1 : 1;
        }
        if (a.population > b.population) {
          return payload === POPDESC ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        filteredCountries: popOrder,
        activePage: 1,
      };

    case FILTER_PAGE:
      return {
        ...state,
        activePage: payload,
      };

    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        allActivities: payload,
      };

    case POST_NEW_ACTIVITY:
      return {
        ...state,
        allActivities: [...state.allActivities, payload],
      };

    case REMOVE_ACTIVITY:
      const remainingActivities = state.allActivities.filter(
        (act) => act.name !== payload
      );
      return {
        ...state,
        allActivities: remainingActivities,
      };

    case FILTER_BY_ACTIVITY:
      const countriesWithAct = state.allCountries.filter((count) =>
        count.activities.includes(payload)
      );
      return {
        ...state,
        filteredCountries: countriesWithAct,
      };

    default:
      return state;
  }
};
