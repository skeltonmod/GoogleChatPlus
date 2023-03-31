import axios from 'axios';

const axiosInstance = axios.create({
  // Configure your Axios instance, e.g., set the base URL
  baseURL: 'https://chat.googleapis.com/v1/',
});

axiosInstance.interceptors.request.use(
  function (config) {
    console.log('Request:', config);
    // Modify the request configuration if needed
    return config;
  },
  function (error) {
    // Handle request errors
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    console.log('Response:', response);
    // Modify the response data if needed
    return response;
  },
  function (error) {
    // Handle response errors
    return Promise.reject(error);
  }
);

export default axiosInstance;