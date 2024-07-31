import axios from "axios";
import config from "./config";

const BASE_URL = config.BASE_URL;

export const getOrders = () => {
  return axios
    .get(`${BASE_URL}/get-all-orders`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res) return res?.data;
    })
    .catch((err) => console.log(err));
};

// export const edit = (values, id) => {
//   return axios
//     .put(`${BASE_URL}/url/${id}`, values, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//     .then((res) => {
//       if (res?.data?.token)
//       return res?.data;
//     })
//     .catch((err) => console.log(err));
// };

// export const add = (values) => {
//   const token = localStorage.getItem("@dashboard-token");
//   return axios
//     .post(`${BASE_URL}/url`, values, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "JWT " + token,
//       },
//     })
//     .then((res) => {
//       if (res?.data?.token)
//       return res?.data;
//     })
//     .catch((err) => console.log(err));
// };
