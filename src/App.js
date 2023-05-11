import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import CategoryList from "./pages/CategoryList/CategoryList";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Login from "./pages/signin/Login";
import Profile from "./pages/profile/Profile";
import ProtectedRoute from "./routes/ProtectedRoute";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
