// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Properties from "./pages/Properties";

function App() {
  return (
    <>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/properties" element={<Properties />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;