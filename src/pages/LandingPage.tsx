import Feature from "../components/LandingPage/Feature";
import Footer from "../components/LandingPage/Footer";
import Header from "../components/LandingPage/Header";
import Hero from "../components/LandingPage/Hero";

export default function LandingPage() {
    return (
        <div className="landing-page">
        <Header />
        <Hero />
        <Feature />
        <Footer />
        </div>
    );
}