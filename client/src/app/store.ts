import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { apiSlice } from './apiSlice.ts';
const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default Store;
