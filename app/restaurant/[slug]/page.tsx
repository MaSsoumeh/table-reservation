import { Metadata } from "next";
import Description from "./components/Description";
import Images from "./components/Images";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";
import { PrismaClient } from "@prisma/client";

export const metadata: Metadata = {
  title: "Milestone Grill | BookTable",
  description: "See details of the restaurant",
};

type Props = {
  params: {
    slug: string;
  };
};

type Restaurant = {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
};

const prisma = new PrismaClient();
const fetchRestaurant = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });
  if (!restaurant) {
    throw new Error();
  }
  return restaurant;
};

const Restaurant = async (props: Props) => {
  const restaurant = await fetchRestaurant(props.params.slug);
  const { name, description, images, slug } = restaurant;
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={slug} />
        <Title name={name} />
        <Rating />
        <Description description={description} />
        <Images images={images} />
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
};

export default Restaurant;
