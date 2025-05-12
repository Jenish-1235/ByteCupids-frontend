import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/components/Home/Sidebar.css";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <aside className="sidebar">
      <h2 className="sidebar__logo">
        <span className="logo">ByteCupids</span>
      </h2>
      
      <div
        className="sidebar__menu-item sidebar__menu-item--active"
        onClick={() => navigate("/")}
      >
        <span className="sidebar__icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 9.5L10 4L17 9.5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 17V10.5H15V17"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="sidebar__label">Home</span>
      </div>
      
      <div className="sidebar__menu-item">
        <span className="sidebar__icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2.2" />
            <rect x="9" y="8" width="2" height="6" rx="1" fill="currentColor" />
            <rect x="9" y="5" width="2" height="2" rx="1" fill="currentColor" />
          </svg>
        </span>
        <span className="sidebar__label">About Us</span>
      </div>
      
      <button className="sidebar__logout-btn">
        <span className="sidebar__icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 15L18 10L13 5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 10H7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 3V17"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="sidebar__label">Log out</span>
      </button>
    </aside>
  );
};

export default Sidebar;
