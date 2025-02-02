import React, { useState } from "react";
import "./DashboardOverviewStyles.css";
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import pfp from '../Assets/dino_pfp.jpg'

const DashboardOverview = () => {
  const [filter, setFilter] = useState("Today");

  const activityData = {
    Today: [
      { image: "../Assets/dino_pfp.jpg", text: "John Doe created a new post - 2 minutes ago" },
      { image: "../Assets/dino_pfp.jpg", text: "Jane Smith registered - 15 minutes ago" },
      { image: "../Assets/dino_pfp.jpg", text: "Mike Johnson updated their profile - 1 hour ago" }
    ],
    Yesterday: [
      { image: "../Assets/dino_pfp.jpg", text: "John Doe created a new post - 1 day ago" },
      { image: "../Assets/dino_pfp.jpg", text: "Jane Smith registered - 1 day ago" },
      { image: "../Assets/dino_pfp.jpg", text: "Mike Johnson updated their profile - 1 day ago" }
    ],
    "Last 2 Weeks": [
      { image: "../Assets/dino_pfp.jpg", text: "John Doe created a new post - 1 week ago" },
      { image: "../Assets/dino_pfp.jpg", text: "Jane Smith registered - 2 weeks ago" },
      { image: "../Assets/dino_pfp.jpg", text: "Mike Johnson updated their profile - 1 week ago" }
    ]
  };

  const usersData = {
    Today: [
      { name: "John Doe", username: "@johndoe", email: "john@example.com", status: "Active", joined: "Jan 15, 2024", image: "/images/john.jpg" },
      { name: "Jane Smith", username: "@janesmith", email: "jane@example.com", status: "Pending", joined: "Jan 14, 2024", image: "/images/jane.jpg" }
    ],
    Yesterday: [
      { name: "Mike Johnson", username: "@mikejohnson", email: "mike@example.com", status: "Active", joined: "Jan 13, 2024", image: "/images/mike.jpg" }
    ],
    "Last 2 Weeks": [
      { name: "John Doe", username: "@johndoe", email: "john@example.com", status: "Active", joined: "Jan 15, 2024", image: "/images/john.jpg" },
      { name: "Jane Smith", username: "@janesmith", email: "jane@example.com", status: "Pending", joined: "Jan 14, 2024", image: "/images/jane.jpg" },
      { name: "Mike Johnson", username: "@mikejohnson", email: "mike@example.com", status: "Active", joined: "Jan 13, 2024", image: "/images/mike.jpg" }
    ]
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <TopNav />

      <main className="dashboard-main">
        <div className="dashboard-content">
          <div className="filter-tabs-container">
            <div className="filter-tabs">
              {["Today", "Yesterday", "Last 2 Weeks"].map((tab) => (
                <button
                  key={tab}
                  className={`filter-button ${filter === tab ? "active" : ""}`}
                  onClick={() => setFilter(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="activity-container">
            <h3 className="section-title">Recent Activity</h3>
            <ul className="activity-list">
              {activityData[filter].map((activity, index) => (
                <li key={index} className="activity-item">
                  <img src={pfp} alt="User" className="activity-avatar" />
                  <span>{activity.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="users-container">
            <h3 className="section-title">Users List</h3>
            <table className="users-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Joined Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {usersData[filter].map((user, index) => (
                  <tr key={index}>
                    <td className="pfp1">
                      <img src={pfp} alt="User" className="user-avatar" />
                      <div className="pfp1-u">
                        {user.name} <span className="username">{user.username}</span>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`status ${user.status === "Active" ? "active" : "pending"}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>{user.joined}</td>
                    <td>
                      <button className="action view">View</button>
                      <button className="action edit">Edit</button>
                      <button className="action delete">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardOverview;
