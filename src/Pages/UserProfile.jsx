import React from "react";
import "./UserProfileStyles.css";
import Sidebar from "./components/SidebarWithoutPic";
import pfp from "../Assets/dino_pfp.jpg";
import TopNav from "./components/TopNav";

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <Sidebar />
      <TopNav />

      <main className="main-content3">
        <div className="profile-box">
          <div className="profile-header">
            <div className="profile-info">
              <img src={pfp} alt="profile" className="profile-img" />
              <div>
                <h2 className="profile-name">John Doe</h2>
                <p className="profile-username">@johndoe</p>
                <span className="status-active">Active</span>
              </div>
            </div>
            <div className="profile-actions">
              <button className="edit-profile">Edit Profile</button>
              <button className="deactivate-account">Deactivate Account</button>
            </div>
          </div>

          <div className="info-sections">
            <div className="info-card">
              <h3 className="info-title">Personal Information</h3>
              <p><strong>Full Name:</strong> John Doe</p>
              <p><strong>Email:</strong> john@example.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Location:</strong> New York, USA</p>
              <p><strong>Join Date:</strong> January 15, 2024</p>
            </div>
            <div className="info-card">
              <h3 className="info-title">Account Statistics</h3>
              <p><strong>Total Posts:</strong> 247</p>
              <p><strong>Posts This Month:</strong> 12</p>
              <p><strong>Last Active:</strong> 2 hours ago</p>
              <p><strong>Account Status:</strong> <span className="status-active">Active</span></p>
            </div>
            <div className="info-card">
              <h3 className="info-title">Recent Activity</h3>
              <ul className="recent-activity-list">
                <li><span className="dot blue"></span> Created a new post - 2 hours ago</li>
                <li><span className="dot green"></span> Updated profile information - 1 day ago</li>
                <li><span className="dot purple"></span> Changed account settings - 3 days ago</li>
              </ul>
            </div>
          </div>

          <div className="recent-posts">
            <h3 className="info-title">Recent Posts</h3>
            <ul>
              <li><strong>Getting Started with Web Development</strong> - 5 min read</li>
              <li><strong>10 Tips for Better Code Quality</strong> - 8 min read</li>
              <li><strong>Understanding JavaScript Promises</strong> - 12 min read</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
