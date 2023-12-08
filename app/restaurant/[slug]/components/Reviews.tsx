import { Review } from "@prisma/client";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div>
      <h1 className="font-bold text-xl mt-10 mb-5 borber-b pb-5">
        What people are saying
      </h1>
      {reviews.length ? (
        <div>
          {reviews.map((review) => {
            return <ReviewCard key={review.id} review={review} />;
          })}
        </div>
      ) : (
        <p className="mb-4">No reviews</p>
      )}
    </div>
  );
};

export default Reviews;
