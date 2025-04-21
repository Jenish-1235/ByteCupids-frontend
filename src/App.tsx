import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./styles/pages/App.css";
import React, { Suspense } from "react";

const LandingPage = React.lazy(()=> import("./pages/LandingPage"))
const LaunchLab = React.lazy(() => import("./pages/LaunchLab"));
const LabTopics = React.lazy(() => import("./pages/LabTopics"));

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<h1>Loading Labs...</h1>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/launchlab" element={<LaunchLab />} />
          <Route path="/labtopics" element={<LabTopics />} />
        </Routes>
      </Router>
          </Suspense>
    </AuthProvider>
  );
}

export default App;
