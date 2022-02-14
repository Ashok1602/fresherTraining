import axios from "axios";
export const AXIOS_INSTANCE = axios.create();
AXIOS_INSTANCE.defaults.headers.common["Content-Type"] = "application/json";
if (
  localStorage.getItem("authToken") !== null &&
  localStorage.getItem("authToken") !== undefined
) {
  const token = localStorage.getItem("authToken");
  AXIOS_INSTANCE.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const LOGIN_CONFIG = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
};
export const CONFIG = {
  headers: {
    "Content-Type": "application/json"
  }
};
// base url
export const BASE_URL = "https://argos-dev-api.azurewebsites.net/api/v1";

