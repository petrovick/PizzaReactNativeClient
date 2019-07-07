import axios from "axios";
import store from "~/store";
import { SERVER_IP } from "react-native-dotenv";
console.tron.error("SERVER_IP");
console.tron.error(SERVER_IP);
const api = axios.create({
  baseURL: SERVER_IP
});

api.interceptors.request.use(config => {
  const { token } = store.getState().auth;
  // const { active: team } = store.getState().teams;

  const headers = { ...config.headers };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  // if (team) {
  //   headers.TEAM = team.slug;
  // }

  return { ...config, headers };
});

export default api;
