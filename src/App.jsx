import WhoWeAre from "./pages/About";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<WhoWeAre />} />
        <Route path="/whoweare" element={<Navigate to="/about" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
