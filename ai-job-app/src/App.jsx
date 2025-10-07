import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UploadCV from "./pages/UploadCV";
import JobMatches from "./pages/JobMatches";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<UploadCV />} />
        <Route path="/matches" element={<JobMatches />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
