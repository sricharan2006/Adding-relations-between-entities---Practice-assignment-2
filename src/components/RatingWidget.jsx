import React, { useState } from 'react';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
      setHoveredRating(0);
    } else {
      alert('Please select a rating between 1 and 5.');
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '5px', cursor: 'pointer' }}>
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            style={{
              color: star <= (hoveredRating || rating) ? 'gold' : 'gray',
              fontSize: '24px',
            }}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={handleSubmit} style={{ marginTop: '10px' }}>
        Submit Rating
      </button>
    </div>
  );
};

export default RatingWidget;
