
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import Filter from "../components/Filter";
import Search from "../components/Search";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`https://fakestoreapi.com/products?limit=${currentPage * 10}`);
        setProducts(result.data);
        setFilteredProducts(result.data);

        const categoryResult = await axios("https://fakestoreapi.com/products/categories");
        setCategories(categoryResult.data);
      } catch (error) {
        console.error("Failed to fetch products or categories", error);
      }
    };

    fetchData();
  }, [currentPage]);

  // Define handleSearch function
  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) =>
          product.title.toLowerCase().includes(term.toLowerCase()) ||
          product.description.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  // Define handleFilter function
  const handleFilter = (category) => {
    if (category === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  // Function to load more products
  const loadMoreProducts = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container mx-auto p-4">
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <Filter categories={categories} onFilter={handleFilter} />
      <ProductList products={filteredProducts} />
      {hasMore && (
        <button onClick={loadMoreProducts} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Load More
        </button>
      )}
    </div>
  );
};

export default Home;
