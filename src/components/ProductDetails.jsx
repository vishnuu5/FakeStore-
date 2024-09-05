import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await axios(`https://fakestoreapi.com/products/${id}`);
      setProduct(result.data);
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img src={product.image} alt={product.title} className="w-full md:w-1/3 object-cover" />
        <div className="md:ml-4">
          <h2 className="text-2xl font-semibold">{product.title}</h2>
          <p className="mt-2">${product.price}</p>
          <p className="mt-2">{product.description}</p>
          <button onClick={addToCart} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
