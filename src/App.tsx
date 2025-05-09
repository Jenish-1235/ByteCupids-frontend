import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import React, { Suspense } from "react";
import "./App.css";

const LandingPage = React.lazy(()=> import("./pages/LandingPage"))

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<h1>Loading Labs...</h1>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
          </Suspense>
    </AuthProvider>
  );
}

export default App;
