import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import CategoryList from "./pages/CategoryList/CategoryList";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Login from "./pages/signup/Login";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
