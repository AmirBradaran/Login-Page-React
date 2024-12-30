import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";

export default function App() {
  const [token, setToken] = useState();
  const handleToken = (tk) => {
    setToken(tk);
  };
  return (
    <>
      <AuthContext.Provider value={{ token, handleToken }}>
        <Navbar />
        {token ? <Home /> : <Login />}
      </AuthContext.Provider>
    </>
  );
}
