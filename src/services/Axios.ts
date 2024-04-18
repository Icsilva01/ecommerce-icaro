import Axios from "axios";
import { getAuth } from "../utils/authHelper";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const axios = Axios.create({
  baseURL: API_URL,
});

export const axiosAuth = (token = getAuth()?.access_token) => {

  const axios = Axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        location.href = '/login';
      }

      return error;
    }
  );

  return axios;
};
