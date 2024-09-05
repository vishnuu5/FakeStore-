import React from "react";

const Search = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search products..."
      className="w-full mb-4 p-2 border rounded"
    />
  );
};

export default Search;
