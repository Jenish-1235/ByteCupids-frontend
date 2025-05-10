import React from "react";
import "../styles/Header.css";

const Header: React.FC = () => (
  <header className="header">
    <div className="greeting">
      Hello,<span className="username">Welcome Back!</span>
    </div>
    <div className="profile">
      <span className="profileName">User_Name</span>
    </div>
  </header>
);

export default Header;
