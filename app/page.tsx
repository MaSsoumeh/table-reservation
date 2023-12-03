import { Cuisine, Location, PRICE } from "@prisma/client";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import { prisma } from "./lib/service";

//typeDefs
export interface RestaurantCardType {
  id: number;
  name: string;
  main_img: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  slug: string;
}

//fetchData
const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      main_img: true,
      cuisine: true,
      location: true,
      slug: true,
    },
  });
  return restaurants;
};

//
export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <>
      <main>
        <Header />
        <div className="py-3 px-36 mt-1 flex flex-wrap justify-center">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </main>
    </>
  );
}
