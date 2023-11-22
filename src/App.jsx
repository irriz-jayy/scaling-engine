import { Route, Routes } from "react-router-dom";
import "./App.css";
import Maps from "./pages/Maps";
import { Homepage } from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
