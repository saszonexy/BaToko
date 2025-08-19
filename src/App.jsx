import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Product from "./pages/product";
import Contact from "./pages/contact";
import Login from "./pages/login"; 
import Register from "./pages/register"; 

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />{" "}
      </Routes>
      <Footer />
    </Router>
  );
}
