import React, { useEffect } from 'react';
import Feature, { FeaturesSection } from "../components/LandingPage/FeatureSection";
import Footer from "../components/LandingPage/Footer";
import Header from "../components/LandingPage/Header";
import Hero from "../components/LandingPage/Hero";
import PlatformOverview from "../components/LandingPage/PlatformOverview";
import '../styles/pages/LandingPage.css';
import Pricing, { PricingSection } from '../components/LandingPage/PricingSection';
import LandingTeaser from '../components/LandingPage/LandingTeaser';
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
        <div className="landing-page cursor-bg">
            {/* Global glow effects */}
            <div className="global-glow glow-top"></div>
            <div className="global-glow glow-middle"></div>
            <div className="global-glow glow-bottom"></div>
            
            <Header />
            <section className="section hero-section">
                <Hero className="section" />
            </section>
            <LandingTeaser/>
            <FeaturesSection/>
            <PricingSection/>
            <Footer />
        </div>
    );
}