import { FormEvent, useState } from "react";
import "../styles/components/LoginForm.css"; // Assuming you have a CSS file for styling

export default function LoginForm({
  onRegisterClick,
}: {
  onRegisterClick: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill all fields");
    }

    setLoading(true);
    const user = { email, password };
    console.log(user);
  };

  return (
    <div>
      <h1 className="login-form-title">Login</h1>
      <h3 className="login-form-tag-line">Continue your journey !</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="input-field"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="input-field"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div>
          <button
            type="submit"
            className="login-form-login-button"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </div>

        <div>
          <button
            type="button"
            className="login-form-register-button"
            onClick={onRegisterClick}
          >
            Register
          </button>

          <button
            type="button"
            className="login-form-forget-password-button"
            onClick={() => console.log("Forgot Password")}
          >
            Forgot Password?
          </button>
        </div>
      </form>
    </div>
  );
}
