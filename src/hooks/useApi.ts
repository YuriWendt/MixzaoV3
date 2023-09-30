import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5173/";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const API_USER = axios.create({
    baseURL: process.env.VITE_API_URL,
});

export default API_USER;
