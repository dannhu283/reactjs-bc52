import {
  GET_POST_PENDING,
  GET_POST_FULFEILLED,
  GET_POST_REJECTED,
} from "../constants/postConstants";
import axios from "axios";

export const getPosts = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: GET_POST_PENDING });
      const response = await axios.get(
        " https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({ type: GET_POST_FULFEILLED, payload: response.data });
    } catch (error) {
      //error.response.data laf format cuar axios
      dispatch({ type: GET_POST_REJECTED, error: error.response.data });
    }
  };
};
