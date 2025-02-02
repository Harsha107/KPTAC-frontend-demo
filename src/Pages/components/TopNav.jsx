import React from "react";
import "./TopNavStyles.css";
import { FaSearch, FaBell } from "react-icons/fa";

const TopNav = () => {
  return (
    <nav className="navbar">
      <h2 className="nav-title">Overview</h2>
      <div className="nav-actions">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>
        <FaBell className="nav-icon" />
      </div>
    </nav>
  );
};

export default TopNav;