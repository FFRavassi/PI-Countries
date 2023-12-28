import axios from "axios";

import {
  GET_ALL_ACTIVITIES,
  POST_NEW_ACTIVITY,
  REMOVE_ACTIVITY,
  FILTER_BY_ACTIVITY,
  /* FETCH_ACTIVITY, */
} from "./action-types";

export function getAllActivities() {
  try {
    return async function (dispatch) {
      const { data } = await axios("http://localhost:3001/activities");
      return dispatch({
        type: GET_ALL_ACTIVITIES,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
}

export function postNewActivity(activity) {
  try {
    return async function (dispatch) {
      const { data } = await axios.post(
        "http://localhost:3001/activities",
        activity
      );
      return dispatch({
        type: POST_NEW_ACTIVITY,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
}

export function removeActivity(activity) {
  return {
    type: REMOVE_ACTIVITY,
    payload: activity,
  };
}

export function filterByActivity(activity) {
  return {
    type: FILTER_BY_ACTIVITY,
    payload: activity,
  };
}

/* export function fetchActivity() {
  try {
    return async function (dispatch) {
      const { data } = await axios("http://localhost:3001/activities");
      dispatch({
        type: FETCH_ACTIVITY,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
} */
