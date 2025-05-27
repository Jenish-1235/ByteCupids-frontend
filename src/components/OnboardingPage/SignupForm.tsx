import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/components/OnboardingPage/OnboardingForms.css";
import { registerUser } from "../../services/RegisterService";

interface SignupFormProps {
  onSwitchToLogin: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSwitchToLogin }) => {
  const [username, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const navigate = useNavigate();

  // Set typing animation to complete after the animation duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypingDone(true);
    }, 2000); // Match with the typing animation duration

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const response = await registerUser({ username, email, password });
      // You can handle the response as needed, e.g., save token, show success, redirect
      alert("Signup successful! Please login.");
      onSwitchToLogin();
    } catch (error: any) {
      alert(
        error?.response?.data?.message || error
      );
    }
  };

  return (
    <div className="onboarding-container">
      {/* ByteCupids logo as back button */}
      <Link to="/" className="brand-logo">
        ByteCupids
      </Link>

      <div className="onboarding-left">
        {/* Enhanced heading with typing animation */}
        <h1 className="onboarding-heading" data-text="Roll the Carpet.!">
          <span>Roll the Carpet.!</span>
        </h1>

        {/* Added tagline for context */}
        <p className="onboarding-tagline">
          Begin your learning adventure with a personalized journey through
          computer science fundamentals and beyond.
        </p>

        {/* ByteCupids-specific tagline instead of button */}
        <div className="bytecupids-tagline">
          <span className="bytecupids-highlight">ByteCupids</span> offers
          conversational AI tutoring that adapts to your learning style, helping
          you master concepts at your own pace.
        </div>

      
      </div>

      <div className="onboarding-right">
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form-content" autoComplete="off">
            <h2 className="form-title">Create Account</h2>
            <p className="form-subtitle">
              Join ByteCupids today and start your journey.
            </p>

            <div className="form-group">
              <input
                type="text"
                id="signup-fullname"
                className="form-input"
                placeholder="Full Name"
                value={username}
                onChange={(e) => setFullName(e.target.value)}
                required
                autoComplete="off" // Or "name", "new-name"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="signup-email"
                className="form-input"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off" // Or "email", "new-email"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                id="signup-password"
                className="form-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                id="signup-confirm-password"
                className="form-input"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>
            
            <div className="form-group">
              <div className="checkbox-container">
                <input 
                  type="checkbox" 
                  id="terms-agreement" 
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  required
                />
                <label htmlFor="terms-agreement">
                  I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
                </label>
              </div>
            </div>

            <button type="submit" className="form-button primary-button">
              Signup
            </button>

            <div className="separator">
              <span>Or</span>
            </div>

            <div className="social-login">
              <button type="button" className="social-button google" aria-label="Sign up with Google">
                <img src="/images/google-icon.svg" alt="Google" width={20} height={20} />
              </button>
              <button type="button" className="social-button facebook" aria-label="Sign up with Facebook">
                <img src="/images/facebook-icon.svg" alt="Facebook" width={20} height={20} />
              </button>
              <button type="button" className="social-button github" aria-label="Sign up with Github">
                <img src="/images/github-icon.svg" alt="Github" width={20} height={20} />
              </button>
            </div>

            <div className="form-footer">
              <p>
                Already Registered?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onSwitchToLogin();
                  }}
                >
                  Login
                </a>
              </p>

              <div className="footer-links">
                <a href="#">Terms & Conditions</a>
                <a href="#">Support</a>
                <a href="#">Customer Care</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
