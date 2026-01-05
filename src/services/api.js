import axios from 'axios';

// Backend ka base URL (Change karna aasaan hoga baad mein)
const API_URL = "http://localhost:8080/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;