import {
  GET_POST_FULFEILLED,
  GET_POST_PENDING,
  GET_POST_REJECTED,
} from "../constants/postConstants";

const initState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POST_PENDING: {
      return { ...state, isLoading: true };
    }
    case GET_POST_FULFEILLED: {
      return { ...state, posts: action.payload, isLoading: false };
    }
    case GET_POST_REJECTED: {
      return { ...state, isLoading: false, error: action.error };
    }
    default:
      return state;
  }
};

export default postReducer;
