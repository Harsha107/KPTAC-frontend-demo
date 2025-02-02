import React from "react";
import './SidebarStyles.css';

const SidebarWithoutPic = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>
      <ul className="sidebar-menu">
        <li className="menu-item">
          <i className="fas fa-bars menu-icon"></i> Overview
        </li>
        <li className="menu-item">
          <i className="fas fa-user-group menu-icon"></i> Users
        </li>
        <li className="menu-item">
          <i className="fas fa-clipboard-list menu-icon"></i> Posts
        </li>
      </ul>
    </aside>
  );
};

export default SidebarWithoutPic;
