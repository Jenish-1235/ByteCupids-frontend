import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/components/OnboardingPage/OnboardingForms.css";
import Toast from "../global/Toast";

interface ForgotPasswordFormProps {
  onSwitchToLogin: () => void;
  onSwitchToSignup: () => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  onSwitchToLogin,
}) => {
  const [email, setEmail] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "warning" | "info";
  } | null>(null);

  // Set typing animation to complete after the animation duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypingDone(true);
    }, 2000); // Match with the typing animation duration

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // TODO: Replace with actual password reset API call
      // await resetPassword(email);

      setToast({
        message: "🔒 Password reset link has been sent to your email.",
        type: "success",
      });

      // Switch to login after showing success message
      setTimeout(() => {
        onSwitchToLogin();
      }, 3000);
    } catch (error: any) {
      let errorMessage = "Failed to send reset link.";

      if (error?.response?.status === 404) {
        errorMessage = "❌ No account found with this email address.";
      } else if (error?.response?.status === 429) {
        errorMessage = "⚠️ Too many requests. Please try again later.";
      } else if (!navigator.onLine) {
        errorMessage = "📡 Please check your internet connection.";
      }

      setToast({
        message: errorMessage,
        type: "error",
      });
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

      {/* ByteCupids logo as back button */}
      <Link to="/" className="brand-logo">
        ByteCupids
      </Link>

      <div className="onboarding-left">
        {/* Enhanced heading with typing animation */}
        <h1 className="onboarding-heading" data-text="No Worries.!!">
          <span>No Worries.!!</span>
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
          <form
            onSubmit={handleSubmit}
            className="form-content"
            autoComplete="off"
          >
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

            <button type="submit" className="form-button secondary-button">
              {" "}
              {/* Changed to secondary-button for theme consistency */}
              Send Reset Link
            </button>

            <div className="form-footer">
              <p>
                Remember your password?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onSwitchToLogin();
                  }}
                >
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
