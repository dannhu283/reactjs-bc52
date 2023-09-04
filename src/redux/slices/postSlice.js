import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
  "post/getPosts",
  async (params, { dispatch, getState }) => {
    try {
      const response = await axios.get(
        " https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  // bắt và xử lí các action được dispatch từ createAsyncThunk
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });

    builder.addCase(getPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
