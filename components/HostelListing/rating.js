import React, { useState } from 'react';

const HotelRatingCard = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (stars) => {
    setRating(stars);
  };

  const getRatingText = () => {
    if (rating === 5) {
      return 'Excellent';
    } else if (rating < 3) {
      return 'Not bad';
    } else if (rating >= 3 && rating <= 4) {
      return 'Good';
    } else {
      return '';
    }
  };

  return (
    <div>
      <h3>Rate this Hotel</h3>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRating(star)}
            style={{
              fontSize: '24px',
              cursor: 'pointer',
              color: star <= rating ? 'gold' : 'gray',
            }}
          >
            &#9733;
          </span>
        ))}
      </div>
      <p>Rating: {getRatingText()}</p>
    </div>
  );
};

export default HotelRatingCard;