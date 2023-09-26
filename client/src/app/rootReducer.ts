import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import counterReducer from './features/Counter.slice';

export const rootReducer = combineReducers({
  counter: counterReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
