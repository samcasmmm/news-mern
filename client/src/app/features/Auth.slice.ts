import { accessLocalStore } from '@/libs/helpers';
import { UserDetailsFromLocal } from '@/types/users';
import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
  isAuthenticated: boolean;
};

export const user: UserDetailsFromLocal = accessLocalStore('user');

const initialState: AuthState = {
  isAuthenticated: user ? true : false,
};
console.log(initialState.isAuthenticated);

const isAuthfn = (state: AuthState) => {
  state.isAuthenticated = true;
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isAuth: isAuthfn,
  },
});

export const { isAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
