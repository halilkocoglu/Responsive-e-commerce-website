import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
