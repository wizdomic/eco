import axios from "axios";

export const api_based_url = "http://localhost:3000";
const jwt = localStorage.getItem("jwt");

export const api = axios.create({
  baseURL: api_based_url,
  headers: {
    Authorization: `Bearer ${jwt}`,
    "Content-Type": "application/json",
  },
});
