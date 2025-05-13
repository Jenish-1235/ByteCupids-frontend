import React, { useState, useRef, useEffect, JSX } from "react";
import "../../styles/components/Home/TopBarMobile.css";

interface TopBarMobileProps {
  userName?: string;
  onLogout?: () => void;
  children : JSX.Element
}

const TopBarMobile: React.FC<TopBarMobileProps> = ({
  userName = "User",
  onLogout,
  children
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setProfileOpen(false);
      }
    }
    if (profileOpen) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [profileOpen]);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [sidebarOpen]);

  return (
    <>
      <div className="topbar-mobile">
        <button
          className="topbar-mobile__hamburger"
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
        <span className="topbar-mobile__branding">ByteCupids</span>
        <button
          className="topbar-mobile__profile-btn"
          aria-label="Profile menu"
          ref={profileRef}
          onClick={() => setProfileOpen((v) => !v)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="profile-icon"
          >
            <circle
              cx="12"
              cy="8.5"
              r="4.5"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M4 20c0-2.5 3.5-4.5 8-4.5s8 2 8 4.5"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
        {profileOpen && (
          <div className="topbar-mobile__profile-dropdown" ref={dropdownRef}>
            <div className="profile-dropdown__username">{userName}</div>
            <button className="profile-dropdown__logout" onClick={onLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
      {/* Sidebar Drawer Overlay */}
      {sidebarOpen && (
        <div
          className="topbar-mobile__sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        >
          <aside
            className="topbar-mobile__sidebar-drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="topbar-mobile__sidebar-close"
              aria-label="Close menu"
              onClick={() => setSidebarOpen(false)}
            >
              &times;
            </button>
            {/* Render sidebarContent if provided, else fallback */}
            {children ? (
              children
            ) : (
              <div
                style={{ padding: "2rem", color: "#fff", textAlign: "center" }}
              >
                No sidebar content.
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  );
};

export default TopBarMobile;