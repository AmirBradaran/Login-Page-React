import React, { useContext } from "react";
import AuthContext from "../Utils/AuthContext";
import "./NavBar.css"
export default function Navbar() {
  const { token, handleToken } = useContext(AuthContext);
  return (
    <nav className="navBar">
      <div className="navBar-Section">
        <h1 className="navBar-Title">Login React Page</h1>
        <section className="navBar-Li">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Apps</a>
        </li>
        {!token ? (
          <li>
            <a> Login </a>
          </li>
        ) : (
          <li>
            <button onClick={()=>handleToken(null)} className="navBar-Li-Btn"> Logout </button>
          </li>
        )}
        </section>
      </div>
    </nav>
  );
}
