import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import React, { Suspense } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import TopicPage from "./pages/TopicPage";

const LandingPage = React.lazy(()=> import("./pages/LandingPage"))
const OnboardingPage = React.lazy(()=> import("./pages/OnboardingPage"))

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<h1>Loading Labs...</h1>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/content" element={<TopicPage />} />
        </Routes>
      </Router>
          </Suspense>
    </AuthProvider>
  );
}

export default App;
