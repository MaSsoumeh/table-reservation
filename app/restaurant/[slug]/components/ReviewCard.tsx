import RatingStars from "@/app/components/RatingStars";
import { Review } from "@prisma/client";

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="border-b pb-7 mb-7">
      <div className="flex">
        <div className="w-1/6 flex flex-col items-center">
          <div className="rounded-full bg-gray-light w-16 h-16 flex items-center justify-center">
            <h2 className="text-primary text-lg uppercase">
              {review.first_name[0]}
              {review.last_name[0]}
            </h2>
          </div>
          <p className="text-center capitalize">
            {review.first_name} {review.last_name}
          </p>
        </div>
        <div className="ml-10 w-5/6">
          <div className="flex items-center">
            <div className="flex mr-5">
              <RatingStars rating={review.rating} />
            </div>
          </div>
          <div className="mt-5">
            <p className="text-reg font-light">{review.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
