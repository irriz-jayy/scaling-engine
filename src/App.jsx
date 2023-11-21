import { Route, Routes } from "react-router-dom";
import "./App.css";
import Maps from "./pages/Maps";
import { Homepage } from "./pages/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </>
  );
}

export default App;
