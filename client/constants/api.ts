import axios from "axios";

const api = axios.create({ baseURL: "https://ecom-native-app-server-j8i01ueyh.vercel.app/api"})

export default api;