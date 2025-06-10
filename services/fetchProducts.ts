import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchProducts = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};

export const fetchProductDetails = async (productId: string) => {
  const response = await axios.get(`${BASE_URL}/${productId}`);
  return response.data;
};