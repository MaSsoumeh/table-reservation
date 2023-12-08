import RatingStars from "@/app/components/RatingStars";
import { calculateRatingAverage } from "@/app/lib/utils";
import { Review } from "@prisma/client";

const Rating = ({ reviews }: { reviews: Review[] }) => {
  const averageRating = calculateRatingAverage(reviews);
  return reviews.length ? (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        {<RatingStars rating={averageRating} />}
        <p className="text-reg ml-3">{averageRating}</p>
      </div>
      <div>
        <p className="text-reg ml-4">
          {reviews.length} Review{reviews.length > 1 ? "s" : ""}
        </p>
      </div>
    </div>
  ) : null;
};

export default Rating;
