import React, { useState } from "react";
import AppRouter from "components/routers";
import {authService} from "fbase";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Chuwitter</footer>
    </>
  );    
}

export default App;
