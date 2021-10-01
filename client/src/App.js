import React, { useState, useEffect } from 'react';
import Routes from './components/Routes'
import UidContext from './components/AppContext'
import axios from 'axios'

const App = () => {
  const [uid, setUid] = useState(null);
  useEffect(() => {
    const  fetchUidJwt = async() => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true
      }).then((res)=>{
          setUid(res.data);
          console.log(res);
      }).catch((err)=>{
        console.log('no token');
        console.log(UidContext.value);
      })
    }
    fetchUidJwt();
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <Routes></Routes>
    </UidContext.Provider>
  );
};

export default App;
