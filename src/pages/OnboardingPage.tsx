import React, { useEffect, useState } from 'react';
import GlobalParticlesBackground from "../components/global/GlobalParticlesBackground";
import LoginForm from "../components/OnboardingPage/LoginForm";
import SignupForm from "../components/OnboardingPage/SignupForm";
import ForgotPasswordForm from "../components/OnboardingPage/ForgotPasswordForm";
import "../styles/pages/OnboardingPage.css";
import "../styles/pages/LandingPage.css";
import { useNavigate } from 'react-router';

enum OnboardingView {
  LOGIN,
  SIGNUP,
  FORGOT_PASSWORD
}

export default function OnboardingPage() {
  const [currentView, setCurrentView] = useState<OnboardingView>(OnboardingView.LOGIN);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      console.log("User is already logged in, redirecting to home page.");
      navigate("/home");
    }
    console.log("User is not logged in, staying on onboarding page.");
  }
  , []);

  const renderCurrentView = () => {
    switch(currentView) {
      case OnboardingView.LOGIN:
        return (
          <LoginForm 
            onSwitchToSignup={() => setCurrentView(OnboardingView.SIGNUP)}
            onSwitchToForgotPassword={() => setCurrentView(OnboardingView.FORGOT_PASSWORD)}
          />
        );
      case OnboardingView.SIGNUP:
        return (
          <SignupForm 
            onSwitchToLogin={() => setCurrentView(OnboardingView.LOGIN)}
          />
        );
      case OnboardingView.FORGOT_PASSWORD:
        return (
          <ForgotPasswordForm 
            onSwitchToLogin={() => setCurrentView(OnboardingView.LOGIN)}
            onSwitchToSignup={() => setCurrentView(OnboardingView.SIGNUP)}
          />
        );
    }
  };

  return (
    <div className="onboarding-page">
      {/* Global particles background that spans the entire page */}
      <GlobalParticlesBackground />
      
      {/* Global glow effects at different positions */}
      <div className="global-glow glow-top"></div>
      <div className="global-glow glow-middle"></div>
      <div className="global-glow glow-bottom"></div>

      {renderCurrentView()}
    </div>  
  );
}