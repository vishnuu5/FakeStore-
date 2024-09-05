import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold text-slate-400">
          FakeStore
        </Link>
        <Link to="/cart" className="text-lg font-bold text-slate-400">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
