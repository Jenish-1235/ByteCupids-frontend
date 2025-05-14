import { FC } from "react";
import "../../styles/components/LandingPage/Footer.css";
import {
  FaTwitter,
  FaGithub,
  FaDiscord,
  FaLinkedin,
  // FaArrowUp, // This icon was imported but not used in the original JSX.
               // If you have a "Back to Top" button, you can re-add it.
} from "react-icons/fa";

interface SocialLink {
  href: string;
  label: string;
  Icon: FC; // react-icons components are functional components
}

interface NavItem {
  href: string;
  text: string;
}

interface NavColumn {
  title: string;
  items: NavItem[];
}

interface LegalLink {
  href: string;
  text: string;
}

const socialLinksData: SocialLink[] = [
  { href: "https://twitter.com/bytecupids", label: "Twitter", Icon: FaTwitter },
  { href: "https://github.com/bytecupids", label: "GitHub", Icon: FaGithub },
  { href: "https://discord.gg/bytecupids", label: "Discord", Icon: FaDiscord },
  { href: "https://linkedin.com/company/bytecupids", label: "LinkedIn", Icon: FaLinkedin },
];

const navColumnsData: NavColumn[] = [
  {
    title: "Product",
    items: [
      { href: "#features", text: "Features" },
      { href: "#pricing", text: "Pricing" },
      { href: "/case-studies", text: "Case Studies" },
      { href: "/roadmap", text: "Roadmap" },
      { href: "/changelog", text: "Changelog" },
    ],
  },
  {
    title: "Resources",
    items: [
      { href: "/blog", text: "Blog" },
      { href: "/documentation", text: "Documentation" },
      { href: "/community", text: "Community" },
      { href: "/faq", text: "FAQs" },
      { href: "/support", text: "Support" },
    ],
  },
  {
    title: "Company",
    items: [
      { href: "/about", text: "About Us" },
      { href: "/careers", text: "Careers" },
      { href: "/contact", text: "Contact" },
      { href: "/partners", text: "Partners" },
    ],
  },
];

const legalLinksData: LegalLink[] = [
  { href: "/privacy", text: "Privacy Policy" },
  { href: "/terms", text: "Terms of Service" },
  { href: "/cookies", text: "Cookie Policy" },
];

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Note: If you have a "Back to Top" button, you can add its JSX here,
  // for example, using the FaArrowUp icon and the scrollToTop function.
  // <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
  //   <FaArrowUp />
  // </button>

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
              {socialLinksData.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          {navColumnsData.map(({ title, items }) => (
            <nav key={title} className="footer-nav">
              <h3>{title}</h3>
              <ul>
                {items.map(({ href, text }) => (
                  <li key={text}>
                    <a href={href}>{text}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom section */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div className="copyright">
              &copy; {new Date().getFullYear()} ByteCupids. All rights reserved.
            </div>
            <div className="legal-links">
              {legalLinksData.map(({ href, text }) => (
                <a key={text} href={href}>{text}</a>
              ))}
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
