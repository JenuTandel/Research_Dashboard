import axios from "axios";
const baseUrl = "http://localhost:3000/";

// to get database details
export const getDatabase = async () => {
  return await axios.get(baseUrl + "databaseList");
};

// to post database details
export const postDatabase = async (database) => {
  const url = baseUrl + "databaseList";
  return await axios.post(url, database);
};
export const deleteDatabase = async (databaseId) => {
  console.log(databaseId);
  const url = `${baseUrl}databaseList/${databaseId}`;
  return await axios.delete(url);
};
