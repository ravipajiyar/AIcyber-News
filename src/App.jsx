
import WhoWeAre from "./pages/About";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />{" "}
          {/* Default Route */}
          <Route path="home" element={<Home />} />
          <Route path="whoweare" element={<WhoWeAre />} />
          {/* Portfolio Route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
