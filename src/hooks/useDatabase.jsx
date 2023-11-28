import { useEffect, useState } from "react";
import { getDatabase } from "../services/overlay/OverlayService";
const useDatabase = () => {
  const [database, setDatabase] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await getDatabase();
    setDatabase(response.data);
  };
  return database;
};

export default useDatabase;
