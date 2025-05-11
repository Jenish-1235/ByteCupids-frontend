import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/OnboardingPage/OnboardingForms.css';

interface LoginFormProps {
  onSwitchToSignup: () => void;
  onSwitchToForgotPassword: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ 
  onSwitchToSignup, 
  onSwitchToForgotPassword 
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here - for now just log to console
    console.log('Login submitted:', { username, password, rememberMe });
    // TODO: Add actual authentication logic with your AuthContext
  };

  const handleSkipLogin = () => {
    navigate('/');
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-left">
        <h1 className="onboarding-heading">Welcome Back .!</h1>
        <button className="skip-btn" onClick={handleSkipLogin}>Skip the lag ?</button>
      </div>

      <div className="onboarding-right">
        <div className="form-container">
          <h2 className="form-title">Login</h2>
          <p className="form-subtitle">Glad you're back.!</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="username"
                className="form-input"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
            </div>
            
            <button type="submit" className="form-button primary-button">
              Login
            </button>
            
            <div className="form-link-center">
              <a href="#" onClick={(e) => { e.preventDefault(); onSwitchToForgotPassword(); }}>
                Forgot password ?
              </a>
            </div>
            
            <div className="separator">
              <span>Or</span>
            </div>
            
            <div className="social-login">
              <button type="button" className="social-button google">
                <img src="/images/google-icon.svg" alt="Google" width="20" height="20" />
              </button>
              <button type="button" className="social-button facebook">
                <img src="/images/facebook-icon.svg" alt="Facebook" width="20" height="20" />
              </button>
              <button type="button" className="social-button github">
                <img src="/images/github-icon.svg" alt="GitHub" width="20" height="20" />
              </button>
            </div>
            
            <div className="form-footer">
              <p>Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); onSwitchToSignup(); }}>Signup</a></p>
              
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