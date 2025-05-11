// filepath: /home/jenu/projects/major-projects/ByteCupids-frontend/src/components/Onboarding/SignupForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/OnboardingPage/OnboardingForms.css';

interface SignupFormProps {
  onSwitchToLogin: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Handle signup logic here - for now just log to console
    console.log('Signup submitted:', { username, email, password });
    // TODO: Add actual registration logic
  };
  
  const handleSkipSignup = () => {
    navigate('/');
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-left">
        <h1 className="onboarding-heading">Roll the Carpet.!</h1>
        <button className="skip-btn" onClick={handleSkipSignup}>Skip the lag ?</button>
      </div>

      <div className="onboarding-right">
        <div className="form-container">
          <h2 className="form-title">Signup</h2>
          <p className="form-subtitle">Just some details to get you in.!</p>
          
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
                type="email"
                id="email"
                className="form-input"
                placeholder="Email / Phone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            
            <div className="form-group">
              <input
                type="password"
                id="confirmPassword"
                className="form-input"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            
            <button type="submit" className="form-button primary-button">
              Signup
            </button>
            
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
              <p>Already Registered? <a href="#" onClick={(e) => { e.preventDefault(); onSwitchToLogin(); }}>Login</a></p>
              
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