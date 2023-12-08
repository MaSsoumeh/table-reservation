import React from "react";
import emptyStar from "../../public/icons/empty-star.svg";
import halfStar from "../../public/icons/half-star.svg";
import fullStar from "../../public/icons/star.svg";
import Image from "next/image";

const RatingStars = ({ rating }: { rating: number }) => {
  const ratingStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const diff = parseFloat((rating - i).toFixed(1));
      if (diff >= 1) {
        stars.push(fullStar);
      } else if (diff < 1 && diff > 0) {
        if (diff <= 0.2) {
          stars.push(emptyStar);
        } else if (diff > 0.2 && diff <= 0.6) {
          stars.push(halfStar);
        } else {
          stars.push(fullStar);
        }
      } else stars.push(emptyStar);
    }
    return stars;
  };

  return (
    <div className="flex mr-1">
      {ratingStars().map((star, idx) => (
        <Image
          key={idx}
          src={star}
          alt="rating Star"
          className="w-4 h-4 mr-1"
        />
      ))}
    </div>
  );
};

export default RatingStars;
