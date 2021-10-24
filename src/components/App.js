import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from '../myBase';

function App() {
  const [init, setInit] = useState(false);
  //로그인 여부 확인
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userObj, setUserObj] = useState(null);
  
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else{
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  console.log(isLoggedIn);
  return (
  <>
  {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj}/> : "initializing..."}
  <footer>&copy; Dwitter {new Date().getFullYear()} </footer>
  </>
  );
}

export default App;
