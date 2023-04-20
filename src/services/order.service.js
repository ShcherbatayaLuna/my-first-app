import axiosInstance from "../utils/axios";

export const bookApartment = (payload) => {
  return axiosInstance.post("/orders", payload);
};

export const getOrders = () => {
  return axiosInstance.get("/orders");
};