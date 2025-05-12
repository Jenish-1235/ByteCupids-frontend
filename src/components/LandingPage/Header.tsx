import React, { useState, useEffect } from "react";
import "../../styles/components/LandingPage/Header.css";
import { useNavigate } from "react-router";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigateTo = useNavigate();

  const handleSignIn = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo("/onboarding");
  };
  
  // Close mobile menu when clicking on links
  const handleNavLinkClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <div className="logo">ByteCupids</div>

        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <a href="#features" onClick={handleNavLinkClick}>Features</a>
          <a href="#pricing" onClick={handleNavLinkClick}>Pricing</a>
          <a href="#docs" onClick={handleNavLinkClick}>Docs</a>
          <a href="#about" onClick={handleNavLinkClick}>About Us</a>
          <button className="btn primary" onClick={handleSignIn}>
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
