import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
