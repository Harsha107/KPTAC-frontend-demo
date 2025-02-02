import React, { useState } from "react";
import "./LoginStyles.css";
import Sidebar from './components/Sidebar';
import TopNav from "./components/TopNav";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    alert(`Logging in with Email: ${email}, Remember Me: ${remember}`);
  };

  return (
    <div className="login-container">
      <Sidebar />
      <TopNav />

      <main className="main-content1">
        <div className="login-box">
          <h2 className="login-title">Welcome back</h2>
          <p className="login-subtitle">Please enter your details</p>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="Enter your password"
            />
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              Remember me
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          <button onClick={handleLogin} className="login-button">
            Sign in
          </button>

          <p className="signup-text">
            Don’t have an account? <a href="#" className="signup-link">Sign up</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;