import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import CategoryList from "./pages/CategoryList/CategoryList";
import ProductDetail from "./pages/productDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
