import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_NODE_ENV === "local"
    ? "https://1933-38-10-172-16.ngrok-free.app"
    : "http://192.168.0.131:3100";

const config = {
  BASE_URL,
};

export default config;
