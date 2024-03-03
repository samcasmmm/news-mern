import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { api } from '@/app/api';
const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
