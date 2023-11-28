import axios from "axios";
const baseUrl = "http://localhost:3000/";

// to get database details
export const getDatabase = async () => {
  return await axios.get(baseUrl + "databaseList");
};

// to post database details
export const postDatabase = async (database) => {
  console.log("In database");
  const url = baseUrl + "databaseList";
  return await axios.post(url, database);
};
