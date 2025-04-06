import Particles from "./components/Particles";
import { AuthProvider } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import "./styles/pages/App.css";

function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <div className="app-background">
          <Particles />
        </div>
      </div>
      <LandingPage />
    </AuthProvider>
  );
}

export default App;
