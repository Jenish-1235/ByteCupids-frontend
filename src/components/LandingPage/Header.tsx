// src/components/LandingPage/Header.tsx
import React, { useState, useEffect } from 'react';
import '../../styles/components/LandingPage/Header.css';
import { useNavigate } from 'react-router';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigateTO = useNavigate();

  const handleSignIn = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Get Started clicked");
    navigateTO('/onboarding');
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const nav = document.querySelector('.nav-menu');
      const menuIcon = document.querySelector('.menu-icon');
      
      if (menuOpen && nav && !nav.contains(target) && menuIcon && !menuIcon.contains(target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu on window resize (if switching to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  // Handle menu item click - close menu
  const handleMenuItemClick = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(false);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <span className="logo-text">ByteCupids</span>
      </div>
      
      <div
        className={`menu-icon ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#features" onClick={handleMenuItemClick}>Features</a>
        <a href="#pricing" onClick={handleMenuItemClick}>Pricing</a>
        <a href="#documentation" onClick={handleMenuItemClick}>Docs</a>
        <a href="#about" onClick={handleMenuItemClick}>About</a>
        <button className="nav-cta" onClick={handleSignIn}>Sign In</button>
      </nav>
    </header>
  );
};

export default Header;
