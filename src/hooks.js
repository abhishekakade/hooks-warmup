import { useState, useEffect } from "react";

export const useFetch = (url, initialValue) => {
  // const [joke, setJoke] = useState({});
  const [result, setResult] = useState(initialValue);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setResult(json))
      .catch(err => console.log(err));
  }, [url]);

  return result;
};
