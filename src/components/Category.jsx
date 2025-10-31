import React, { useState, useEffect } from 'react';

const Category = () => {
  const [categories, setCategories] = useState([]); // State to hold categories
  const [selectedCategory, setSelectedCategory] = useState(''); // State to track the selected category

  // Fetch categories from FakeStore API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // FakeStore API endpoint for categories (this API returns all categories)
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data); // Set the fetched categories in the state
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    
    fetchCategories();
  }, []); // Empty dependency array ensures this runs once when the component is mounted

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="category-container">
      <h2>Select a Product Category</h2>
      <div className="categories">
        {categories.length === 0 ? (
          <p>Loading categories...</p>
        ) : (
          categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategorySelect(category)}
              className={category === selectedCategory ? 'active' : ''}
            >
              {category}
            </button>
          ))
        )}
      </div>
      {selectedCategory && (
        <div className="selected-category">
          <h3>Selected Category: {selectedCategory}</h3>
          {/* Add more content here based on the selected category */}
        </div>
      )}
    </div>
  );
};

export default Category;
