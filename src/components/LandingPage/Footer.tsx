import { FC } from "react";
import "../../styles/components/LandingPage/Footer.css";
import {
  FaTwitter,
  FaGithub,
  FaDiscord,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-content">
          {/* Brand column */}
          <div className="footer-brand">
            <div className="footer-logo">ByteCupids</div>
            <p className="footer-tagline">
              A conversation-driven AI learning platform that helps you master
              computer science through natural dialogue and personalized
              guidance.
            </p>

            <div className="social-links">
              <a
                href="https://twitter.com/bytecupids"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/bytecupids"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://discord.gg/bytecupids"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Discord"
              >
                <FaDiscord />
              </a>
              <a
                href="https://linkedin.com/company/bytecupids"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Product column */}
          <nav className="footer-nav">
            <h3>Product</h3>
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="/case-studies">Case Studies</a>
              </li>
              <li>
                <a href="/roadmap">Roadmap</a>
              </li>
              <li>
                <a href="/changelog">Changelog</a>
              </li>
            </ul>
          </nav>

          {/* Resources column */}
          <nav className="footer-nav">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/documentation">Documentation</a>
              </li>
              <li>
                <a href="/community">Community</a>
              </li>
              <li>
                <a href="/faq">FAQs</a>
              </li>
              <li>
                <a href="/support">Support</a>
              </li>
            </ul>
          </nav>

          {/* Company column */}
          <nav className="footer-nav">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/partners">Partners</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom section */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div className="copyright">
              &copy; {new Date().getFullYear()} ByteCupids. All rights reserved.
            </div>

            <div className="legal-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Policy</a>
            </div>
          </div>

          <div className="footer-bottom-right">
            Made with{" "}
            <span role="img" aria-label="love">
              💜
            </span>{" "}
            by <span>ByteCupids Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
