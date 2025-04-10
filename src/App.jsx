import React, { useState } from 'react';

import ProductCard from './components/ProductCard';


const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Smartphone",
      description: "A cool smartphone with excellent features",
      image: "https://via.placeholder.com/150",
      avgRating: 4.2,
      totalRatings: 5,
    },
    {
      id: 2,
      name: "Headphones",
      description: "Noise-cancelling over-ear headphones",
      image: "https://via.placeholder.com/150",
      avgRating: 3.8,
      totalRatings: 10,
    }
  ]);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId
          ? {
              ...product,
              totalRatings: product.totalRatings + 1,
              avgRating:
                ((product.avgRating * product.totalRatings) + newRating) /
                (product.totalRatings + 1)
            }
          : product
      )
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Ratings</h1>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onRatingSubmit={handleRatingSubmit}
        />
      ))}
    </div>
  );
};

export default App;
