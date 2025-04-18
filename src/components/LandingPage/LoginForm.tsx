import { FormEvent, useState } from "react";
import "../../styles/components/LoginForm.css";
import { loginUser } from "../../services/LoginService.tsx";
import { LoginResponse } from "../../types/LoginResponse.tsx";
import { LoginPayload } from "../../types/LoginPayload.tsx";
import { useAuth } from "../../context/AuthContext.tsx";

export default function LoginForm({
  onRegisterClick,
  onSuccess,
}: {
  onRegisterClick: () => void;
  onSuccess: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill all fields");
    }

    setLoading(true);
    const payload: LoginPayload = {
      email,
      password,
    };
    console.log("Login payload:", payload);
    try {
      const response: LoginResponse = await loginUser(payload);

      if (response.code !== 200) {
        console.log("Error response:", response.error);
        setError(response.message);
        return;
      }

      console.log("Login response:", response);
      if (response.code === 200) {
        login(
          {
            username: response.user.username,
            email: response.user.email,
            uuid: response.user.uuid,
          },
          response.accessToken,
          response.refreshToken
        );
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
      onSuccess();
    }
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
