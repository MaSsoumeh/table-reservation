import { Review } from "@prisma/client";

export const calculateRatingAverage = (reviews: Review[]) => {
  if (!reviews.length) return 0;
  return parseFloat(
    (
      reviews.reduce((sum, review) => {
        return sum + review.rating;
      }, 0) / reviews.length
    ).toFixed(1)
  );
};

export const ratingText = (rating: number) => {
  if (rating > 4.2) {
    return "Awesome";
  } else if (rating > 3.2) {
    return "Good";
  } else if (rating > 0) {
    return "Average";
  } else {
    return "";
  }
};
