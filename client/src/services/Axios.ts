import axios, { AxiosInstance } from 'axios';

const controller = new AbortController();
const signal = controller.signal;

const AxiosWithAuth: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
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
