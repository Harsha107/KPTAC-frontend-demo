import React from "react";
import './SidebarStyles.css';

const SidebarWithoutPic = () => {
  return (
    <aside className="sidebar">
      <a href="/"><h2 className="sidebar-title">Dashboard</h2></a>
      <ul className="sidebar-menu">
        <li className="menu-item">
          <i className="fas fa-bars menu-icon"></i><a href="/dashboard-overview">Overview</a>
        </li>
        <li className="menu-item">
          <i className="fas fa-user-group menu-icon"></i> <a href="/user-list">Users</a>
        </li>
        <li className="menu-item">
          <i className="fas fa-clipboard-list menu-icon"></i> <a href="/posts-page">Posts</a>
        </li>
      </ul>
    </aside>
  );
};

export default SidebarWithoutPic;
