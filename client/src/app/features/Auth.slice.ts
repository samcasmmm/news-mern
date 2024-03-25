import { accessLocalStore, clearLocalStorage } from '@/libs/helpers';
import { UserDetailsFromLocal } from '@/types/users';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const user: UserDetailsFromLocal = accessLocalStore('user');

type AuthState = {
  isAuthenticated: boolean;
  user: UserDetailsFromLocal | null;
};
interface UserPayload {
  _id: string;
  name: string;
  email: string;
  role: string;
  token: string;
}

const initialState: AuthState = {
  isAuthenticated: user?._id !== null ? true : false,
  user: user,
};

const isAuthfn = (state: AuthState) => {
  state.isAuthenticated = true;
};
const setUserDetailsfn = (
  state: AuthState,
  action: PayloadAction<UserPayload>,
) => {
  if (state.user) {
    state.user._id = action.payload._id;
    state.user.name = action.payload.name;
    state.user.email = action.payload.email;
    state.user.role = action.payload.role;
    state.user.token = action.payload.token;
  }
};

const logoutFn = (state: AuthState) => {
  state.isAuthenticated = false;
  state.user = null;
  clearLocalStorage();
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isAuth: isAuthfn,
    setUserDetails: setUserDetailsfn,
    logout: logoutFn,
  },
});

export const { isAuth, setUserDetails, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
