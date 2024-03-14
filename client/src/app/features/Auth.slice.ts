import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
  isLoggedIn: boolean;
};

const initialState: AuthState = {
  isLoggedIn: false,
};

const isLoggedInFn = (state: AuthState) => {
  state.isLoggedIn = true;
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLoggedIn: isLoggedInFn,
  },
});

export const { isLoggedIn } = AuthSlice.actions;
export default AuthSlice.reducer;
