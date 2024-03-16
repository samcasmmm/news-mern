import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const client = axios.create({
  baseURL: '', // Provide your base URL here
});

export const request = async <T>(
  options: AxiosRequestConfig,
  token: string | undefined = '',
): Promise<T> => {
  // Set the authorization header if token is provided
  if (token !== '') {
    client.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  const onSuccess = (response: AxiosResponse<T>) => {
    return response?.data?.data;
  };

  const onError = (error: any) => {
    return Promise.reject(error.response?.data);
  };

  return client(options).then(onSuccess).catch(onError);
};
