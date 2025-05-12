import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/components/OnboardingPage/OnboardingForms.css";

interface ForgotPasswordFormProps {
  onSwitchToLogin: () => void;
  onSwitchToSignup: () => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  onSwitchToLogin,
}) => {
  const [email, setEmail] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  // Set typing animation to complete after the animation duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypingDone(true);
    }, 2000); // Match with the typing animation duration

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Forgot password attempt for:", email);
    alert("Password reset link sent to your email (if account exists).");
  };

  return (
    <div className="onboarding-container">
      {/* ByteCupids logo as back button */}
      <Link to="/" className="brand-logo">
        ByteCupids
      </Link>

      <div className="onboarding-left">
        {/* Enhanced heading with typing animation */}
        <h1 className="onboarding-heading" data-text="No Worries.!!">
          <span>
            No Worries.!!
          </span>
        </h1>

        {/* Added tagline for context */}
        <p className="onboarding-tagline">
          We'll help you reset your password quickly and get you back to your
          learning journey.
        </p>

        {/* ByteCupids-specific tagline instead of button */}
        <div className="bytecupids-tagline">
          <span className="bytecupids-highlight">ByteCupids</span> values your
          security. After resetting, you'll regain access to your personalized
          learning experience and conversation history.
        </div>

        {/* Decorative line */}
        <div className="decorative-line"></div>
      </div>

      <div className="onboarding-right">
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form-content" autoComplete="off">
            <h2 className="form-title">Reset Password</h2>
            <p className="form-subtitle">
              Enter your email to receive a password reset link.
            </p>

            <div className="form-group">
              <input
                type="email"
                id="forgot-email"
                className="form-input"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off" // Or "email", "new-email"
              />
            </div>

            <button type="submit" className="form-button secondary-button"> {/* Changed to secondary-button for theme consistency */}
              Send Reset Link
            </button>

            <div className="form-footer">
              <p>
                Remember your password?{" "}
                <a href="#" onClick={(e) => { e.preventDefault(); onSwitchToLogin(); }}>
                  Log In
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
