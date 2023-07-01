import instance from './axiosInterceptors';
import {showErrorSnackBar} from '../utils/common';
import {store} from '../redux/store';

export const post = async (url: string, formData: any, type = 0) => {
  const options: any = {
    headers: {
      Accept: type ? 'multipart/form-data' : 'application/json',
      'Content-Type': type ? 'multipart/form-data' : 'application/json',
    },
  };
  const token = store.getState().auth.authToken;

  // console.log('authToken:', token);
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }
  return instance
    .post(url, formData, options)
    .then(function (response: any) {
      if (response?.data?.success == 0) {
        showErrorSnackBar(response?.data?.message);
      }
      return response.data;
    })
    .catch(function (error: any) {
      showErrorSnackBar(error.message);
    });
};

export const put = async (url: string, formData: any, type = 0) => {
  const options: any = {
    headers: {
      Accept: type ? 'multipart/form-data' : 'application/json',
      'Content-Type': type ? 'multipart/form-data' : 'application/json',
    },
  };
  const token = store.getState().auth.authToken;
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }
  return instance
    .put(url, formData, options)
    .then(function (response: any) {
      return response.data;
    })
    .catch(function (error: any) {
      showErrorSnackBar(error);
    });
};

export const get = async (url: string, type = 0) => {
  const options: any = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const token = store.getState().auth.authToken;
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }
  options.headers.demo = `Bearer`;
  return instance
    .get(url, options)
    .then(function (response: any) {
      return response.data;
    })
    .catch(function (error: any) {
      // showErrorSnackBar(error?.message)
      return error;
    });
};

export const deleteApi = async (url: string, type = 0) => {
  const options: any = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const token = store.getState().auth.authToken;

  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }
  options.headers.demo = `Bearer`;
  return instance
    .delete(url, options)
    .then(function (response: any) {
      if (response?.data?.status == 0) {
        showErrorSnackBar(response?.data?.message);
      }
      return response.data;
    })
    .catch(function (error: any) {
      showErrorSnackBar(error);
      return error;
    });
};
