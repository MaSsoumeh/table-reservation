import Price from "@/app/components/Price";
import RatingStars from "@/app/components/RatingStars";
import { calculateRatingAverage, ratingText } from "@/app/lib/utils";
import { Cuisine, Location, PRICE, Review } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type Restaurant = {
  name: string;
  main_img: string;
  slug: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  reviews: Review[];
};

const SearchRestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const { name, slug, main_img, price, cuisine, location, reviews } =
    restaurant;
  const averageRating = calculateRatingAverage(reviews);

  return (
    <div className="border-b flex pb-5 border-mint-light">
      <div className="w-44 rounded relative">
        <Image src={main_img} alt={name} fill />
      </div>

      <div className="pl-5 text-primary">
        <h2 className="text-lg">{name}</h2>
        <div className="flex items-start">
          <RatingStars rating={averageRating} />
          <p className="ml-2 text-sm">{ratingText(averageRating)}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <p className="mr-4">{<Price price={price} />}</p>
            <p className="mr-4">{cuisine.name}</p>
            <p className="mr-4">{location.name}</p>
          </div>
        </div>
        <div className="text-red">
          <Link href={`/restaurant/${slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchRestaurantCard;
