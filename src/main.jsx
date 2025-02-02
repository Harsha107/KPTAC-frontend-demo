import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserProfile from "./Pages/UserProfile"
import DashboardOverview from "./Pages/DashboardOverview";
import PostsPage from "./Pages/PostsPage";
import SettingsPage from "./Pages/SettingsPage";
import UserList from "./Pages/UserList"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user-profile",
    element: <UserProfile />,
  },
  {
    path: "/dashboard-overview",
    element: <DashboardOverview />,
  },
  {
    path: "/posts-page",
    element: <PostsPage />,
  },
  {
    path: "/settings-page",
    element: <SettingsPage />,
  },
  {
    path: "/user-list",
    element: <UserList />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);