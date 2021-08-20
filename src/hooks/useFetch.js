import { useState, useEffect } from "react";
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState({ data: [], isFetching: false, isError: false });

  useEffect(() => {
    (async () => {
      try {
        setData((prevState) => ({ ...prevState, isFetching: true }));
        const res = await axios.get(url);
        setData({ data: res.data, isFetching: false, isError: false });
      } catch(err) {
        setData(({ data: [], isFetching: false, isError: true }));
      } 
    })();
  }, [url])

  return { data, setData };
}

export default useFetch;