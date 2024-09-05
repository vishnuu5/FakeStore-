import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <Router>
    <CartProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </CartProvider>
    </Router>
  );
};

export default App;
