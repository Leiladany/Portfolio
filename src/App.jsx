import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Intro from "./pages/Intro";
import Homepage from "./pages/Homepage";
import Games from "./pages/Games";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </div>
  );
};

export default App;
