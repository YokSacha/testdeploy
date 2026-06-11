import axios from "axios";

const API = axios.create({
  baseURL: "https://kinetix-qnx5.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
