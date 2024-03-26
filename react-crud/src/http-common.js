import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.29.37:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});