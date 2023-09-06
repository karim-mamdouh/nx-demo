import { RequestConfig } from '@workspace/models';

export const APP_BASE_URL = 'http://localhost:3000/';

export const EMPS_API: RequestConfig = {
  get: APP_BASE_URL + 'emps/',
  post: APP_BASE_URL + '',
  put: APP_BASE_URL + '',
  delete: APP_BASE_URL + '',
};

export const ADMINS_API: RequestConfig = {
  get: APP_BASE_URL + 'admins/',
  post: APP_BASE_URL + 'admins/',
  put: APP_BASE_URL + '',
  delete: APP_BASE_URL + 'admins/',
};
