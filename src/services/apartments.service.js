import axiosInstance from "../utils/axios";

export const getApartmentsList = () => {
  return axiosInstance.get("/apartments");
};

export const getApartmentById = (id) => {
  return axiosInstance.get(`/apartments/${id}`);
};
