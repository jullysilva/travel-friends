import axios from "axios";

const api = axios.create({
  timeout: 1000 * 10,
  timeoutErrorMessage: "Demorou mais que o esperado",
});

export default api;
