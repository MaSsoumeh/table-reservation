import Image from "next/image";
import Link from "next/link";
import { RestaurantCardType } from "../page";
import Price from "./Price";
interface Props {
  restaurant: RestaurantCardType;
}
const RestaurantCard = (props: Props) => {
  const { main_img, name, price, cuisine, location, slug } = props.restaurant;
  return (
    <Link href={`/restaurant/${slug}`} className="">
      <div className="w-64 h-72 m-3 rounded overflow-hidden border border-gray-light hover:shadow-md hover:border-none cursor-pointer text-primary">
        <div className="relative h-36 w-full">
          <Image src={main_img} alt={`restaurant-${name}`} fill />
        </div>
        <div className="p-2">
          <h3 className="font-bold text-lg mb-2 text-primary">{name}</h3>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2">77 reviews</p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">{cuisine.name}</p>
            <p className="mr-3">
              <Price price={price} />
            </p>
            <p>{location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
