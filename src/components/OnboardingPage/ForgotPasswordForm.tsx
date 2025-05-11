import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/components/OnboardingPage/OnboardingForms.css";

interface ForgotPasswordFormProps {
  onSwitchToLogin: () => void;
  onSwitchToSignup: () => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  onSwitchToLogin,
  onSwitchToSignup,
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
    console.log("Reset password requested for:", email);
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
          <h2 className="form-title">Forgot Password ?</h2>
          <p className="form-subtitle">Please enter you're email</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="example@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="form-button secondary-button">
              Reset Password
            </button>

            <div className="form-footer">
              <p>
                Don't have an account?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onSwitchToSignup();
                  }}
                >
                  Signup
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

export default ForgotPasswordForm;
