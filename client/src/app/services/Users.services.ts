import { api } from '../api';

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: ({ email, password }) => {},
    }),
    //  signUp: builder.mutation({
    //    query: () => {},
    //  }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = usersApi;
