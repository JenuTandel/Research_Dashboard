import axios from "axios";
const baseUrl = "http://localhost:3000/";

// to get registration details
export const getUserData = async () => {
  return await axios.get(baseUrl + "userData");
};

// to post registration details
export const postUserData = async (userData) => {
  console.log(userData);
  const url = baseUrl + "userData";
  return await axios.post(url, userData);
};
