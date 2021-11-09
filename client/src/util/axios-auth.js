import axios from "axios";
import secureStorage from "./secureStorage";
import store from "../store/store";

const instance = axios.create({
  baseURL: "http://localhost:3002",
});
instance.interceptors.request.use(function (config) {
  const token = secureStorage.getItem("token");
  config.headers.Authorization = token;
  return config;
});
export default instance;
