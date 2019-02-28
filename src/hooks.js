import { useState, useEffect } from 'react';

export const useFetch = (url, initalValue) => {
  const [result, setResult] = useState(initalValue);
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(resp => setResult(resp))
  }, []);

  return result;
}