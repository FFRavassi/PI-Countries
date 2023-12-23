import axios from "axios";
import { GET_ALL_ACTIVITIES } from "./action-types";

export function getAllActivities() {
  return async function (dispatch) {
    const { data } = await axios("http://localhost:3001/activities");
    return dispatch({
      type: GET_ALL_ACTIVITIES,
      payload: data,
    });
  };
}
