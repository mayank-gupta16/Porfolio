import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import BlogGroup from "./pages/BlogGroup";
import "./App.css";
import Login from "./pages/Login";
import Blog from "./Components/Blog";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/BlogGroup" element={<BlogGroup />} />
        <Route path="/Blog/:id" element={<Blog />} />
        <Route path="/password12345" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
