import { FormEvent, useState } from "react";
import "../styles/components/RegisterForm.css";
import { registerUser } from "../services/RegisterService";
import { RegisterResponse } from "../types/RegisterResponse";
import { RegisterPayload } from "../types/RegisterPayload";

export default function RegisterForm({
  onLoginClick,
}: {
  onLoginClick: () => void;
}) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    setLoading(true);
    const payload: RegisterPayload = {
      username,
      email,
      password,
    };
    console.log("Register payload:", payload);

    try {
      const response: RegisterResponse = await registerUser(payload);
      console.log("Register response:", response);

      if (response.code !== 200) {
        setError(response.message || "Registration failed. Please try again.");
        console.error("Registration error:", response.error);
        return;
      }

      if (response.code === 200) {
        console.log("Registration successful:", response);
        alert("Registration successful! Please log in.");
        onLoginClick();
      }
      
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="register-form-title">Register</h1>
      <h3 className="register-form-tag-line">
        Join us and start your journey!
      </h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="input-field"
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

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

        <div>
          <input
            className="input-field"
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {error && <div className="register-form-error-message">{error}</div>}

        <div>
          <button
            type="submit"
            disabled={loading}
            className="register-form-register-button"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </div>

        <div>
          <button
            type="button"
            className="register-form-login-button"
            onClick={onLoginClick}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
