import AppNavbar from "./components/appnavbar";
import { Routes, Route } from "react-router";
import Products from "./components/products";
import Cart from "./components/cart";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
