import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  mode: 'cors',
});

export const api = createApi({
  baseQuery,
  tagTypes: [''],
  endpoints: () => ({}),
});
