import { accessLocalStore } from '@/libs/helpers';
import { UserDetailsFromLocal } from '@/types/users';
import axios, { AxiosInstance } from 'axios';

const controller = new AbortController();
const signal = controller.signal;

export const user: UserDetailsFromLocal = accessLocalStore('user');

const AxiosWithAuth: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + user.token,
  },
  signal: signal,
});
const AxiosWithoutAuth: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  signal: signal,
});

export { AxiosWithAuth, AxiosWithoutAuth, controller, signal };
