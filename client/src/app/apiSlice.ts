import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: '',
  mode: 'cors',
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [''],
  endpoints: () => ({}),
});

const users = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `/auth`,
        method: 'POST',
        body: data,
      }),
    }),
    userList: builder.query({
      query: (data) => ({
        url: `/auth`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useUserListQuery } = users;
