import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import NavBar from "../components/header";
import "../App.css";

export default function AplicationRoutes() {
  return (
    <BrowserRouter>
      <input type="checkbox" id="Mode" name="ss" value="1" />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
