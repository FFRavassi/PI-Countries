import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRIES_BY_ID,
  FILTER_BY_CONTINENT,
  SORT_BY_ABC,
  SORT_BY_POPULATION,
  FILTER_PAGE,
  GET_ALL_ACTIVITIES,
  POST_NEW_ACTIVITY,
  FILTER_BY_ACTIVITY,
} from "../Actions/action-types";

import { ASCENDING, DESCENDING, POPDESC } from "../sortConsts/sortConsts";

const initialState = {
  allCountries: [],
  filteredCountries: [],
  countryById: [],
  allActivities: [],
  activePage: 1,
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: payload,
        filteredCountries: payload,
      };

    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        filteredCountries: payload,
      };

    case GET_COUNTRIES_BY_ID:
      return {
        ...state,
        countryById: payload,
      };

    case FILTER_BY_CONTINENT:
      let continentFilter = [];
      payload === "allContinents"
        ? (continentFilter = [...state.allCountries])
        : (continentFilter = [...state.allCountries].filter((country) =>
            country.continent[0].includes(payload)
          ));
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

    case FILTER_BY_ACTIVITY:
      let countriesWAct = [];
      let allCountries2 = state.allCountries;

      if (Array.isArray(payload)) {
        const uniqueCountries = new Set();
        payload.forEach((act) => {
          act.countries.forEach((countID) => uniqueCountries.add(countID));
        });
        const iDCountriesWAct = Array.from(uniqueCountries);
        countriesWAct = [...allCountries2].filter((count) =>
          [...iDCountriesWAct].includes(count.id)
        );
      } else {
        const selectedAct = [...state.allActivities].find(
          (ele) => ele.name === payload
        );
        for (let k = 0; k < selectedAct.countries.length; k++) {
          for (let l = 0; l < allCountries2.length; l++) {
            if (selectedAct.countries[k] === allCountries2[l].id) {
              countriesWAct.push(allCountries2[l]);
            }
          }
        }
      }
      return {
        ...state,
        filteredCountries: countriesWAct,
        activePage: 1,
      };

    default:
      return state;
  }
};
