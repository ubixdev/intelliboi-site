
import React, { useState } from "react";
import "../style/Navber.css";
import NavberLogo from "../assets/intelliboi-logo2.png";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart, FiUser } from "react-icons/fi";

export default function Navber() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = [
    { path: "/Home", label: "Home" },
    { path: "/Shop", label: "Shop" },
    { path: "/Categories", label: "Categories" },
    { path: "/Contact", label: "Contact" },
    { path: "/About", label: "About" },
  ];
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navber-container">
      <div className="navber-left">
        <img src={NavberLogo} alt="INTELLIBOI LOGO" className="navber-logo" />
      </div>
      <div className="navber-center">
        <div className="desktop-nav">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => `navber-link ${isActive ? "active-link" : ""}`}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="navber-right">
        <div className="search-bar">
          <input type="text" name="search" className="navber-search-input" placeholder="Search products..." />
          <button className="navber-link navber-link-search">
            <IoSearch />
          </button>
        </div>
        <button className="navber-icon navber-cart">
          <FiShoppingCart />
        </button>
        <button className="navber-icon navber-user">
          <FiUser />
        </button>
        <button className="navber-link navber-link-login">Login</button>
        <button className="navber-link navber-link-get-started">Get Started</button>
      </div>
      <div className={`hamburger-toggle ${isMobileMenuOpen ? "open" : ""}`} onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile NavLinks only */}
      {isMobileMenuOpen && (
        <div className="navber-mobile-links" style={{position: 'fixed', top: '13%', left: 0, width: '30vw', height: '50vh', background: 'rgb(8,8,16)', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => `navber-link ${isActive ? "active-link" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
