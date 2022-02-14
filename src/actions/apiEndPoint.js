import axios from "axios";
export const AXIOS_INSTANCE = axios.create();
AXIOS_INSTANCE.defaults.headers.common["Content-Type"] = "application/json";
AXIOS_INSTANCE.defaults.headers.common["Accept-Language"] = "en";


// if (localStorage.getItem("authToken") !== null && localStorage.getItem("authToken") !== undefined) {
//   const token = localStorage.getItem("authToken");
//   AXIOS_INSTANCE.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// }

// export const LOGIN_CONFIG = {
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded"
//   }
// };
// export const CONFIG = {
//   headers: {
//     "Content-Type": "application/json"
//   }
// };
// base url
export const BASE_URL = "http://guestiodevapi-env.eba-dqd2mp5w.us-east-1.elasticbeanstalk.com";

