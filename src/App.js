import AppNavbar from "./components/appnavbar";
import { Routes, Route } from "react-router";
import Products from "./components/products";
import Cart from "./components/cart";
import Home from "./components/home";
import Footer from "./components/footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
