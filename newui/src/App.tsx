import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./client/pages/Dashboard";
import TopicPage from "./client/pages/TopicPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/module/:moduleId/topic/:topicId/subtopic/:subtopicId"
          element={<TopicPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
