import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here - for now just log to console
    console.log("Reset password requested for:", email);
    // TODO: Add actual password reset logic
  };

  const handleGoBack = () => {
    onSwitchToLogin();
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-left">
        <h1 className="onboarding-heading">No Worries.!!</h1>
        <button className="skip-btn" onClick={handleGoBack}>
          Take me back.!
        </button>
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
