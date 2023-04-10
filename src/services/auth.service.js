import axiosInstance from "../utils/axios";

export const loginUser = (payload) => {
  return axiosInstance.post("/users/login", payload);
};

export const registerUser = (payload) => {
  return axiosInstance.post("/users/register", payload);
};

export const logout = () => {
  return axiosInstance.post("/users/logout");
};
