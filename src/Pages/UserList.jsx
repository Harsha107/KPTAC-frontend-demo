import { useState } from "react";
import { Search, Plus, Menu } from "lucide-react";
import "./UserListStyles.css";
import Sidebar from "./components/SidebarWithoutPic";
import TopNav from './components/TopNav'
import pfp from '../Assets/dino_pfp.jpg'

const usersData = [
  { name: "John Doe", username: "@johndoe", email: "john@example.com", status: "Active", joined: "Jan 15, 2024" },
  { name: "Jane Smith", username: "@janesmith", email: "jane@example.com", status: "Pending", joined: "Jan 14, 2024" },
  { name: "Mike Johnson", username: "@mikejohnson", email: "mike@example.com", status: "Active", joined: "Jan 13, 2024" }
];

const UserList = () => {
  const [users, setUsers] = useState(usersData);

  const toggleStatus = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].status = updatedUsers[index].status === "Active" ? "Pending" : "Active";
    setUsers(updatedUsers);
  };

  return (
    <div className="user-list-container">
      <Sidebar />
      <TopNav />

      <main className="main-content2">

        <div className="user-table-container">
          <div className="table-header">
            <h3 className="table-title">Users List</h3>
            <div className="table-actions">
              <input type="text" placeholder="Search users..." className="search-input" />
              <button className="search-button"><Search /></button>
              <button className="add-user-button"><Plus /> Add User</button>
            </div>
          </div>

          <table className="user-table">
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
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="ul-td1">
                    <img src={pfp} alt="dino-pic" className="ul-img" />
                    <div className="ul-td1-u">
                      {user.name} <br /><span className="username">{user.username}</span>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <span 
                      className={`status ${user.status === "Active" ? "status-active" : "status-pending"}`} 
                      onClick={() => toggleStatus(index)}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>{user.joined}</td>
                  <td>
                    <span className="action view">View</span>
                    <span className="action edit">Edit</span>
                    <span className="action delete">Delete</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button className="page-button">&lt;</button>
            <button className="page-button">1</button>
            <button className="page-button">2</button>
            <button className="page-button">3</button>
            <button className="page-button">&gt;</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserList;