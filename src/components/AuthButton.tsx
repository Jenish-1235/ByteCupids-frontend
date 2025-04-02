import "../styles/AuthButton.css"; // Importing CSS styles for the component
export default function AuthButton() {
  return (
    <div className="auth-button">
      <button className="login-button">Login</button>
      <button className="signup-button">Sign Up</button>
    </div>
  );
}
