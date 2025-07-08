import axios from "axios";
const AUTH_URL = process.env.NEXT_PUBLIC_API_AUTH_BASE_URL;

export const loginServices = async (data: LoginTypes) => {
  const response = await axios.post(`${AUTH_URL}/login`, data, {
    headers: {
      Accept: "application/json",
    },
  });
  return response.data;
};
