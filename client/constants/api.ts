import axios from "axios";

const api = axios.create({ baseURL: "https://ecom-native-app-server-n30rvlq2w.vercel.app/api"})

export default api;