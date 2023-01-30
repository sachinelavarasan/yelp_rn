import { useEffect, useState } from "react";
import axios from "../api/axios";

const useResults = () => {
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const searchApi = async (search) => {
    try {
      const response = await axios.get("/search", {
        params: {
          limit: 50,
          term: search,
          location: "san jose",
        },
      });

      setResult(response.data.businesses);
    } catch (err) {
      setErrorMessage("something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, errorMessage, result];
};

export default useResults;
