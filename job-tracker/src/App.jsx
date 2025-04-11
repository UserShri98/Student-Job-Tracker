import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddJob from "./pages/AddJob";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1>Student Job Tracker</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddJob />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
