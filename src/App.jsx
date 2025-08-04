
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <div className="font-sans">
        <Header />
       <Home/>
      <AboutUs/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
