import React from "react";
import "../../styles/components/Home/DashboardHeader.css";


const Header: React.FC = () => (
  <header className="dashboard-header">
    <div className="dashboard-header__welcome-bar">
      <span className="greeting">
        <span className="greeting-highlight">Modules</span>
      </span>
    </div>
  </header>
);

export default Header;