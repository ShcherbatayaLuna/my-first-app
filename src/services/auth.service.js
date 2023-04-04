import axiosInstance from "../utils/axios";

export const loginUser = (payload) => {
  return axiosInstance.post("/users/login", payload);
};