import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000", // Your backend API URL
});

// Add token (if using auth)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
