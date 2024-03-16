import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '@/app/features/Counter.slice';
import AuthReducer from '@/app/features/Auth.slice';
import UIReducer from '@/app/features/UIState.slice';

export const rootReducer = combineReducers({
  counter: counterReducer,
  Auth: AuthReducer,
  UIState: UIReducer,
});
