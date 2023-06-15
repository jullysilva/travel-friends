import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000 * 10,
  timeoutErrorMessage: "Demorou mais que o esperado",
  cancelToken: '',
});

export default api;