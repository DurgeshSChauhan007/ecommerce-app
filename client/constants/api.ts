import axios from "axios";

const api = axios.create({ baseURL: "https://foreverecommerce-backend.vercel.app/api"})

export default api;