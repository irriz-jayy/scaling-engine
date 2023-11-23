import { Route, Routes } from "react-router-dom";
import "./App.css";
import Maps from "./pages/Maps";
import { Homepage } from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
