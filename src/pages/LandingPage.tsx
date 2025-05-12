import React, { useEffect } from 'react';
import Feature from "../components/LandingPage/Feature";
import Footer from "../components/LandingPage/Footer";
import Header from "../components/LandingPage/Header";
import Hero from "../components/LandingPage/Hero";
import PlatformOverview from "../components/LandingPage/PlatformOverview";
import '../styles/pages/LandingPage.css';

export default function LandingPage() {
    useEffect(() => {
        // Reset scroll position when the page loads
        window.scrollTo(0, 0);
        
        // Add smooth scrolling to all links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                if (href) {
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }, []);

    return (
        <div className="landing-page">
            {/* Global glow effects */}
            <div className="global-glow glow-top"></div>
            <div className="global-glow glow-middle"></div>
            <div className="global-glow glow-bottom"></div>
            
            <Header />
            <Hero className="section" />
            <PlatformOverview className="section" />
            <Feature className="section" />
            <Footer />
        </div>
    );
}