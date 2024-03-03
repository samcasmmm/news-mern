import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './features/Counter.slice';
import { api } from '@/app/api';

export const rootReducer = combineReducers({
  counter: counterReducer,
  [api.reducerPath]: api.reducer,
});
