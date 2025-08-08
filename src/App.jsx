// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Services from "./pages/Services";
import ServiceDetail from "./components/ServiceDetail";
// import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/services" element={<Services />} />
           <Route path="/services/:serviceId" element={<ServiceDetail/>} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
