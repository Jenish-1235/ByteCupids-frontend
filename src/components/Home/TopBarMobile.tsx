import React from "react";
import "../../styles/components/Home/TopBarMobile.css";

const TopBarMobile: React.FC<{ onLogout?: () => void }> = ({ onLogout }) => (
  <div className="topbar-mobile">
    <span className="topbar-mobile__branding">ByteCupids</span>
    <button className="topbar-mobile__logout-btn" onClick={onLogout}>
      Logout
    </button>
  </div>
);

export default TopBarMobile;