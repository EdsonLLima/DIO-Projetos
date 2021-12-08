import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/",
});

export default api;

// api.get('user/benits')
