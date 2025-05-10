import React from "react";
import "../styles/Sidebar.css";

const Sidebar: React.FC = () => (
  <aside className="sidebar">
    <h2>
      <span className="logo">ByteCupids</span>
    </h2>
    <div className="menuItem active">
      <span
        style={{
          marginRight: "1rem",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        {/* Home icon */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ verticalAlign: "middle",paddingLeft:"10px" ,transform: "translateY(-1px)" }}
        >
          <path
            d="M3 9.5L10 4L17 9.5"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 17V10.5H15V17"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      Home
    </div>
    <div className="menuItem">
      <span
        style={{
          marginRight: "1rem",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        {/* About Us icon */}
        <svg
          width="19"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ verticalAlign: "middle", paddingLeft:"10px" ,transform: "translateY(-1px)" }}
        >
          <circle cx="10" cy="10" r="8" stroke="#fff" strokeWidth="2.2" />
          <rect x="9" y="8" width="2" height="6" rx="1" fill="#fff" />
          <rect x="9" y="5" width="2" height="2" rx="1" fill="#fff" />
        </svg>
      </span>
      About Us
    </div>
    <button className="logoutBtn">
      <span
        style={{
          marginRight: "1rem",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        {/* Logout icon */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ verticalAlign: "middle",paddingLeft:"18px" ,transform: "translateY(2px)" }}
        >
          <path
            d="M13 15L18 10L13 5"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 10H7"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 3V17"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      Log out
    </button>
  </aside>
);

export default Sidebar;
