// src/components/LandingPage/Header.tsx
import React, { useEffect, useState } from "react";
import "../../styles/components/LandingPage/Header.css";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">ByteCupids</div>
      <nav className="nav-menu">
        <a href="#product">Product</a>
        <a href="#pricing">Pricing</a>
        <a href="#resources">Resources</a>
        <a href="#partners">Partners</a>
        <a href="#why-us">Why Us</a>
      </nav>
      <div className="cta-buttons">
        <button className="cta-btn primary-btn">Get Started</button>
        <button className="cta-btn secondary-btn">Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
