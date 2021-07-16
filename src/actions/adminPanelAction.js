import axios from "axios";
import {
  FETCH_ADMIN,
  FETCH_ADMIN_VIEWUSERS,
  SESSION_COMPLETE,
} from "../constants/adminContact";

export const adminPanel = () => async (dispatch) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  dispatch({
    type: FETCH_ADMIN,
    payload: res.data,
  });
};

export const adminPanelviewUsers = () => async (dispatch) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  dispatch({
    type: FETCH_ADMIN_VIEWUSERS,
    payload: res.data,
  });
};

export const sessionComplete= () => async (dispatch) => {
    const res = await axios.get("http://3.137.209.222:8000/Sessioncomplete/");
    dispatch({
      type: SESSION_COMPLETE,
      payload: res.data.data,
    });
  };
