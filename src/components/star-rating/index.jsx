import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css"; 

const StarRating = ({ numberOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleStarClick(currentIndex) {
    setRating(currentIndex);
  }

  function handleStarHover(currentIndex) {
    setHover(currentIndex);
  }

  function handleStarLeave() {
    setHover(rating);
  }

  return (
    <>
      {[...Array(numberOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            size={40}
            key={index}
            onClick={() => handleStarClick(index)}
            onMouseMove={() => handleStarHover(index)}
            onMouseLeave={() => handleStarLeave()}
          />
        );
      })}
    </>
  );
};

export default StarRating;
