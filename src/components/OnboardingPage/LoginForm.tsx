import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/components/OnboardingPage/OnboardingForms.css";
import { loginUser } from "../../services/LoginService";
import Toast from "../global/Toast";

interface LoginFormProps {
  onSwitchToSignup: () => void;
  onSwitchToForgotPassword: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSwitchToSignup,
  onSwitchToForgotPassword,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "warning" | "info";
  } | null>(null);
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

    if (!email || !password) {
      setToast({
        message: "Please enter both email and password",
        type: "warning",
      });
      return;
    }

    try {
      const response = await loginUser({ email, password });

      // Verify we have all required data
      if (!response.user?.uuid || !response.accessToken) {
        throw new Error("User not found.Please sign up first.");
      }

      // Store user data and tokens
      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);
      localStorage.setItem("user", JSON.stringify(response.user));
      localStorage.setItem("isLoggedIn", "true");

      setToast({
        message: "Login successful! Welcome back.",
        type: "success",
      });

      // Wait for toast to be visible before redirecting
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } catch (error: any) {
      let errorMessage = error.message || "Failed to login. Please try again.";

      setToast({
        message: errorMessage,
        type: "error",
      });

      // Clear password field on error
      setPassword("");
    }
  };

  return (
    <div className="onboarding-container">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <Link to="/" className="brand-logo">
        ByteCupids
      </Link>

      <div className="onboarding-left">
        <h1 className="onboarding-heading" data-text="Welcome Back .!">
          <span>Welcome Back .!</span>
        </h1>

        <p className="onboarding-tagline">
          Reconnect with your personal AI learning companion and continue your
          journey through computer science.
        </p>

        <div className="bytecupids-tagline">
          <span className="bytecupids-highlight">ByteCupids</span> creates
          meaningful dialogue between humans and machines to make learning
          computer science intuitive and enjoyable.
        </div>
      </div>

      <div className="onboarding-right">
        <div className="form-container">
          <h2 className="form-title">Login</h2>
          <p className="form-subtitle">Glad you're back.!</p>

          <form
            onSubmit={handleSubmit}
            className="form-content"
            autoComplete="off"
          >
            <div className="form-group">
              <input
                type="email"
                id="login-email"
                className="form-input"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                id="login-password"
                className="form-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>

            <div className="form-row">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSwitchToForgotPassword();
                }}
                className="form-link"
              >
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="form-button primary-button">
              Log In
            </button>

            <div className="separator">
              <span>OR</span>
            </div>

            <div className="social-login">
              <button
                type="button"
                className="social-button google"
                aria-label="Login with Google"
              >
                <img
                  src="/images/google-icon.svg"
                  alt="Google"
                  width={20}
                  height={20}
                />
              </button>
              <button
                type="button"
                className="social-button facebook"
                aria-label="Login with Facebook"
              >
                <img
                  src="/images/facebook-icon.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </button>
              <button
                type="button"
                className="social-button github"
                aria-label="Login with Github"
              >
                <img
                  src="/images/github-icon.svg"
                  alt="Github"
                  width={20}
                  height={20}
                />
              </button>
            </div>

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
                  Sign Up
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

export default LoginForm;
