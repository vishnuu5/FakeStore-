import React from "react";

const Filter = ({ categories, onFilter }) => {
  return (
    <div className="flex space-x-4 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilter(category)}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;
