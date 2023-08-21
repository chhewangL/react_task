import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ApiHooks = (url) => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);
  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(url);
      // console.log(response);
      setData(response.data);
      setLoad(false);

    }
    catch (err) {
      setLoad(false);
      setErr(err.message);


    }

  }
  useEffect(() => {
    getData();
  }, []);







  return [data, load, err];


}

export default ApiHooks