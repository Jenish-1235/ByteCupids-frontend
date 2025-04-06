import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import "./styles/pages/App.css";
import LaunchLab from "./pages/LaunchLab";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/launchlab" element={<LaunchLab />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
