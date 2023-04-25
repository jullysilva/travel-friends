import axios from "axios";

const api = axios.create({
  baseURL: "https://travel-friends-production.up.railway.app/",
  timeout: 1000 * 10,
  timeoutErrorMessage: "Demorou mais que o esperado",
  cancelToken: '',
});

export default api;
