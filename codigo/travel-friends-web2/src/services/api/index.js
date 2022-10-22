import axios from "axios";

const api = axios.create({
  baseURL: "https://travel-friends-backend.herokuapp.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default api;
