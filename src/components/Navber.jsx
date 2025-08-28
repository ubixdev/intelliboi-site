import React from 'react'
import "../style/Navber.css"
import NavberLogo from "../assets/intelliboi-logo2.png"
import { NavLink } from "react-router-dom";


export default function Navber() {
 const links = [
   { path: "/home", label: "Home" },
   { path: "/features", label: "Features" },
   { path: "/pricing", label: "Pricing" },
   { path: "/contact", label: "Contact" },
   { path: "/about", label: "About" },
 ];
 
  return (
    <div
      className="navber-container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "rgb(8 8 16)",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="naber-logo">
        <img src={NavberLogo} alt="INTELLIBOI LOGO" style={{ width: "70px" }} />
      </div>

      <div
        className="navber-links"
        style={{ display: "flex", gap: "20px", alignItems: "center" }}
      >
        {links.map(({ path, label, className }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `${className || ""} ${isActive ? "active-link" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}

        <div
          className="navber-buttons"
          style={{ display: "flex", gap: "10px" }}
        >
          <button
            className="navber-link navber-link-login"
            style={{
              padding: "5px 15px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "10px",
              outline: "none",
              border: "none",
            }}
          >
            Login
          </button>
          <button
            className="navber-link navber-link-get-started"
            style={{
              padding: "10px 15px",
              backgroundColor: "#56AB2F",
              color: "white",
              fontSize: "16px",
              border: "none",
              cursor: "pointer",
              borderRadius: "10px",
            }}
          >
            Get Started
          </button>
        </div>

        <div className="hambuger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}
