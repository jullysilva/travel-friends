import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 1000 * 10,
  timeoutErrorMessage: "Demorou mais que o esperado",
  cancelToken: '',
});

export default api;
