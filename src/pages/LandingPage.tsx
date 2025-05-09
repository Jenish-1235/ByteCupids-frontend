import React, { useEffect } from 'react';
import Feature from "../components/LandingPage/Feature";
import Footer from "../components/LandingPage/Footer";
import Header from "../components/LandingPage/Header";
import Hero from "../components/LandingPage/Hero";
import PlatformOverview from "../components/LandingPage/PlatformOverview";
import '../styles/pages/LandingPage.css'; // You'll need to create this file if it doesn't exist

export default function LandingPage() {
    // This effect ensures smooth scrolling when the page loads
    useEffect(() => {
        // Reset scroll position when the page loads
        window.scrollTo(0, 0);
        
        // Add smooth scrolling to all links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href')!);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }, []);

    return (
        <div className="landing-page">
            <Header />
            <Hero />
            <PlatformOverview />
            <Feature />
            <Footer />
        </div>
    );
}