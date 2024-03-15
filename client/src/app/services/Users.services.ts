import { api } from '../api';

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: () => {},
    }),
    signUp: builder.mutation({
      query: () => {},
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = usersApi;
