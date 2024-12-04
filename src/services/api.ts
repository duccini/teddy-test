import axios from "axios";

export const BASE_URL = "https://boasorte.teddybackoffice.com.br/";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
