import { accessLocalStore } from '@/libs/helpers';
import { UserDetailsFromLocal } from '@/types/users';
import { createSlice } from '@reduxjs/toolkit';

export const user: UserDetailsFromLocal = accessLocalStore('user');

type AuthState = {
  isAuthenticated: boolean;
  user: UserDetailsFromLocal;
};

const initialState: AuthState = {
  isAuthenticated: user._id !== null ? true : false,
  user: user,
};

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
