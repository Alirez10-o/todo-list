import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Payments from "./components/Payments";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </Router>
  );
}

export default App;
