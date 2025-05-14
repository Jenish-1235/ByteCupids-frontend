import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import React, { Suspense } from "react";
import "./App.css";
import CustomCursor from "./components/global/CustomCursor";
import "./styles/global/themedloadercomponent.css"

const lazyWithMinTime = (
  factory: () => Promise<any>,
  minDisplayTimeMs = 2000
) => {
  return React.lazy(() =>
    Promise.all([
      factory(),
      new Promise((resolve) => setTimeout(resolve, minDisplayTimeMs)),
    ]).then(([moduleExports]) => moduleExports)
  );
};


const LandingPage = lazyWithMinTime(()=> import("./pages/LandingPage"))
const OnboardingPage = lazyWithMinTime(()=> import("./pages/OnboardingPage"))
const Home = React.lazy(()=> import("./pages/Home"))
const TopicPage = React.lazy(()=> import("./pages/TopicPage"))

const ThemedLoaderComponent = () => (
  <div className="themed-loader cursor-bg">
    <div className="particle-burst-loader">
      <div className="particle-arm p1">
        <div className="particle-head"></div>
      </div>
      <div className="particle-arm p2">
        <div className="particle-head"></div>
      </div>
      <div className="particle-arm p3">
        <div className="particle-head"></div>
      </div>
      <div className="particle-arm p4">
        <div className="particle-head"></div>
      </div>
      <div className="particle-arm p5">
        <div className="particle-head"></div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <CustomCursor/>
      <Suspense fallback={<ThemedLoaderComponent/>}>
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
