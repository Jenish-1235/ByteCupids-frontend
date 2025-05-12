import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import React, { Suspense } from "react";
import "./App.css";
import CustomCursor from "./components/global/CustomCursor";

const LandingPage = React.lazy(()=> import("./pages/LandingPage"))
const OnboardingPage = React.lazy(()=> import("./pages/OnboardingPage"))
const Home = React.lazy(()=> import("./pages/Home"))
const TopicPage = React.lazy(()=> import("./pages/TopicPage"))

function App() {
  return (
    <AuthProvider>
      <CustomCursor/>
      <Suspense fallback={<h1>Loading Labs...</h1>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/content" element={<TopicPage />} />
        </Routes>
      </Router>
          </Suspense>
    </AuthProvider>
  );
}

export default App;
