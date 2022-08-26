import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import userPostReducer from "../features/user-post/userPostSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    userPost: userPostReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
