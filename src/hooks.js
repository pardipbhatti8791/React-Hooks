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

export const useDynamicTransition = ({ increment, delay, length }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(storedIndex => {
        return (storedIndex+increment)%length;
      })
    }, delay);

    return () => clearInterval(interval);
  }, [delay, increment]);

  return index;
}