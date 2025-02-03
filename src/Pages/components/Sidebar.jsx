import React from "react";
import pfp from '../../Assets/dino_pfp.jpg';
import './SidebarStyles.css';

const Sidebar = () => {
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
      <div className="sidebar-profile">
        <img src={pfp} alt="profile" className="profile-img" />
        <div>
          <p className="profile-name">John Doe</p>
          <p className="profile-email">john@example.com</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
