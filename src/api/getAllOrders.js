import axios from "axios";

const getUrl = "http://srv572320.hstgr.cloud:3100"
export const getAllOrders = () => {
    return axios
      .get(`${getUrl}/get-all-orders`)
      .then((res) => {
        if (res) return res?.data;
      })
      .catch((err) => console.log(err));
  };