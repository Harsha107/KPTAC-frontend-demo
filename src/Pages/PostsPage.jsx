import React, { useState } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import "./PostsPageStyles.css";
import Sidebar from "./components/Sidebar";
import TopNav from './components/TopNav';
import pfp from '../Assets/dino_pfp.jpg';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const PostsPage = () => {
  const [filter, setFilter] = useState("All Posts");

  const posts = [
    {
      author: "John Doe",
      time: "2 hours ago",
      title: "Getting Started with Web Development",
      description: "A comprehensive guide for beginners looking to start their journey in web development...",
      views: "1.2k views",
      status: "Published",
    },
    {
      author: "Jane Smith",
      time: "5 hours ago",
      title: "10 Tips for Better Code Quality",
      description: "Essential practices every developer should know for writing maintainable and efficient code...",
      views: "856 views",
      status: "Draft",
    },
    {
      author: "Mike Johnson",
      time: "1 day ago",
      title: "Understanding JavaScript Promises",
      description: "A deep dive into asynchronous programming and how to handle promises effectively...",
      views: "2.1k views",
      status: "Published",
    },
  ];

  const userGrowthData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "User Growth",
        data: [120, 180, 150, 220, 200, 240, 230],
        backgroundColor: "#60A5FA",
      },
    ],
  };

  const postActivityData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Post Activity",
        data: [80, 120, 100, 150, 140, 170, 190],
        backgroundColor: "#A78BFA",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="posts-container">
      <Sidebar />
      <TopNav />

      <main className="posts-main">
        <div className="posts-content">
          <div className="posts-section">
            <h3 className="section-title">Posts List</h3>
            {posts.map((post, index) => (
              <div key={index} className="post-item">
                <div>
                  <div className="pp1">
                    <img src={pfp} alt="pp1-img" className="pp1-img" />
                    <p className="post-meta">{post.author} • {post.time}</p>
                  </div>
                  <h4 className="post-title">{post.title}</h4>
                  <p className="post-description">{post.description}</p>
                  <p className="post-views">👁 {post.views}</p>
                </div>
                <div className="post-actions">
                  <span className={`status ${post.status === "Published" ? "published" : "draft"}`}>{post.status}</span>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <p>Showing 1 to 6 of 24 posts</p>
            <div className="pagination-buttons">
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>Next</button>
            </div>
          </div>
        </div>

        <div className="analytics-section">
          <h3 className="section-title">Analytics Overview</h3>
          <div className="analytics-grid">
            {[
              { title: "Total Users", value: "1,482 users", change: "+12.5%", color: "green" },
              { title: "Active Users", value: "892 active", change: "+8.2%", color: "blue" },
              { title: "Total Posts", value: "3,642 posts", change: "+15.7%", color: "purple" },
              { title: "Engagement Rate", value: "68% engaged", change: "-2.3%", color: "yellow" },
            ].map((card, index) => (
              <div key={index} className="analytics-card">
                <p className="analytics-title">{card.title}</p>
                <p className="analytics-value">{card.value}</p>
                <span className={`analytics-change ${card.color}`}>{card.change}</span>
              </div>
            ))}
          </div>

          <div className="charts-section">
            <div className="chart-container">
              <h4 className="chart-title">User Growth</h4>
              <Bar data={userGrowthData} options={chartOptions} />
            </div>
            <div className="chart-container">
              <h4 className="chart-title">Post Activity</h4>
              <Bar data={postActivityData} options={chartOptions} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PostsPage;
