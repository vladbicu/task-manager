import { useState, useEffect } from "react";

export const http = (url, dependecies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  
  setIsLoading(true)

  useEffect(() => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setIsLoading(false);
      setFetchedData(data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [...dependecies])

  return [isLoading, fetchedData];
};
