import React, { useContext, useState } from "react";
import AuthContext from "../Utils/AuthContext";
import "./Login.css";
export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const { handleToken } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({username , password}),
      });
      const data = await res.json();
      if (data?.token) {
        handleToken(data.token);
      }
    } catch (error) {
      alert(`Something Is Wrong Please Check`);
    }
  };
  return (
    <div className="login-Form">
      <form onSubmit={handleLogin} className="login">
        <h1 className="login-Title">Login</h1>
        <input
          required
          type="text"
          name="userName"
          id="userName"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          required
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
