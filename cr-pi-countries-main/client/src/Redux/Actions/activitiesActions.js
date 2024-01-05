import axios from "axios";

import {
  GET_ALL_ACTIVITIES,
  POST_NEW_ACTIVITY,
  FILTER_BY_ACTIVITY,
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
      alert("The new activity has been created successfully");
      return dispatch({
        type: POST_NEW_ACTIVITY,
        payload: data,
      });
    };
  } catch (error) {
    alert("You must complete all the required fields");
  }
}

export function filterByActivity(activity) {
  return async function (dispatch) {
    try {
      dispatch({ type: FILTER_BY_ACTIVITY, payload: activity });
    } catch (error) {
      console.log(error.message);
    }
  };
}
