import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '@/app/features/Counter.slice';
import AuthReducer from '@/app/features/Auth.slice';
import { api } from '@/app/api';

export const rootReducer = combineReducers({
  counter: counterReducer,
  Auth: AuthReducer,
  [api.reducerPath]: api.reducer,
});
