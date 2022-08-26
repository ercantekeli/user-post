import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  userPostList: [],
  loading: true,
};


export const getUserPost = createAsyncThunk(
  'userPost/getUserPost', async () => {
    const url = "https://6307c9b73a2114bac76baec4.mockapi.io/api//users"
    try {
      const { data } = await axios(url);
      return data
    } catch (error) {
      console.log(error);
    }
  }
);

const userPostSlice = createSlice({
  name: 'userPost',
  initialState,
  reducers: {
    clearUserPostList: (state) => {
      state.userPostList = [];
    },
  },
  extraReducers: {
    [getUserPost.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserPost.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userPostList = payload;
    },
    [getUserPost.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { clearUserPostList } = userPostSlice.actions;

export default userPostSlice.reducer;
