import React from "react";
import "../../styles/components/Home/DashboardHeader.css";

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => (
  <header className="dashboard-header">
    <div className="dashboard-header__welcome-bar">
      <span className="greeting">
        Hello, <span className="greeting-highlight">Welcome Back!</span>
      </span>
      <span className="dashboard-header__user">{userName}</span>
    </div>
  </header>
);

export default Header;