import React, { useState } from "react";
import "./SettingsPageStyles.css";
import Sidebar from './components/SidebarWithoutPic';

const SettingsPage = () => {
  const [newUserReg, setNewUserReg] = useState(true);
  const [newPostAlerts, setNewPostAlerts] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [dateRange, setDateRange] = useState("Last 7 days");
  const [resultsPerPage, setResultsPerPage] = useState("10");

  return (
    <div className="settings-container">
    <Sidebar />
      <main className="settings-main">
        <div className="settings-content">
          <div className="settings-header">
            <h2 className="title">Settings</h2>
            <p className="subtitle">Manage your account preferences and system settings</p>
          </div>

          <div className="settings-section">
            <h3 className="section-title">General Settings</h3>

            <div className="setting-item">
              <div>
                <p className="setting-label">New User Registration</p>
                <p className="setting-description">Get notified when a new user registers</p>
              </div>
              <input type="checkbox" checked={newUserReg} onChange={() => setNewUserReg(!newUserReg)} className="toggle-checkbox" />
            </div>

            <div className="setting-item">
              <div>
                <p className="setting-label">New Post Alerts</p>
                <p className="setting-description">Receive alerts for new posts</p>
              </div>
              <input type="checkbox" checked={newPostAlerts} onChange={() => setNewPostAlerts(!newPostAlerts)} className="toggle-checkbox" />
            </div>

            <div className="setting-item">
              <p className="setting-label">Default Date Range</p>
              <select value={dateRange} onChange={(e) => setDateRange(e.target.value)} className="setting-dropdown">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last Year</option>
              </select>
            </div>

            <div className="setting-item">
              <p className="setting-label">Results Per Page</p>
              <select value={resultsPerPage} onChange={(e) => setResultsPerPage(e.target.value)} className="setting-dropdown">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
            </div>

            <div className="setting-item">
              <div>
                <p className="setting-label">Two-Factor Authentication</p>
                <p className="setting-description">Add an extra layer of security</p>
              </div>
              <input type="checkbox" checked={twoFactorAuth} onChange={() => setTwoFactorAuth(!twoFactorAuth)} className="toggle-checkbox" />
            </div>
          </div>

          <div className="settings-grid">
            <div className="quick-actions">
              <h3 className="section-title">Quick Actions</h3>
              <ul className="action-list">
                <li className="action-item">🔹 Update Profile</li>
                <li className="action-item">🔹 Change Password</li>
                <li className="action-item delete">🔹 Delete Account</li>
              </ul>
            </div>

            <div className="system-info">
              <h3 className="section-title">System Information</h3>
              <p><strong>Version:</strong> 2.1.0</p>
              <p><strong>Last Updated:</strong> Jan 15, 2024</p>
              <p><strong>Storage Used:</strong> 1.2 GB / 5 GB</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;