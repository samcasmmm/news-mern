import { accessLocalStore } from '@/libs/helpers';
import { UserDetailsFromLocal } from '@/types/users';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const user: UserDetailsFromLocal = accessLocalStore('user');

type AuthState = {
  isAuthenticated: boolean;
  user: UserDetailsFromLocal;
};
interface UserPayload {
  _id: string;
  name: string;
  email: string;
  role: string;
  token: string;
}

const initialState: AuthState = {
  isAuthenticated: user._id !== null ? true : false,
  user: user,
};

const isAuthfn = (state: AuthState) => {
  state.isAuthenticated = true;
};
const setUserDetailsfn = (
  state: AuthState,
  action: PayloadAction<UserPayload>,
) => {
  state.user._id = action.payload._id;
  state.user.name = action.payload.name;
  state.user.email = action.payload.email;
  state.user.role = action.payload.role;
  state.user.token = action.payload.token;
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isAuth: isAuthfn,
    setUserDetails: setUserDetailsfn,
  },
});

export const { isAuth, setUserDetails } = AuthSlice.actions;
export default AuthSlice.reducer;
