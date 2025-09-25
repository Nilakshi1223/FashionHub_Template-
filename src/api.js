import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/fashion_backend", // adjust if needed
  headers: {
    "Content-Type": "application/json",
  },
});
