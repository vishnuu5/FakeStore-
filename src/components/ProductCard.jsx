import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="border p-4 rounded shadow">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="h-48 w-full object-cover" />
        <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
        <p className="mt-1">${product.price}</p>
      </Link>
      <Link to="/cart"><button onClick={addToCart} className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">
        Add to Cart
      </button></Link>
    </div>
  );
};

export default ProductCard;
