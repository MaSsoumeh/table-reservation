import { Metadata } from "next";
import Header from "./components/Header";
import SearchRestaurantCard from "./components/SearchRestaurantCard";
import SearchSideBar from "./components/SearchSideBar";
import { prisma } from "../lib/service";
import { Cuisine, Location, PRICE } from "@prisma/client";

//metaData
export const metadata: Metadata = {
  title: "Search | BookTable",
  description: "Search for available table in your favorite restaurant",
};

//typeDefs
type SearchParams = {
  searchParams: {
    city: string;
    cuisine: string;
    price: PRICE;
  };
};

type Restaurants = {
  id: number;
  name: string;
  slug: string;
  price: PRICE;
  main_img: string;
  cuisine: Cuisine;
  location: Location;
}[];

//fetchData
const select = {
  id: true,
  name: true,
  slug: true,
  price: true,
  main_img: true,
  cuisine: true,
  location: true,
};
const fetchRestaurantsByCity = (city: string | undefined) => {
  if (!city) return prisma.restaurant.findMany({ select });
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city,
        },
      },
    },
    select,
  });
};

const fetchRestaurantsByCuisine = (cuisine: string | undefined) => {
  if (!cuisine) return prisma.restaurant.findMany({ select });
  return prisma.restaurant.findMany({
    select,
    where: {
      cuisine: {
        name: {
          equals: cuisine,
        },
      },
    },
  });
};

const fetchRestaurantsByPrice = (price: PRICE | undefined) => {
  if (!price) return prisma.restaurant.findMany({ select });
  return prisma.restaurant.findMany({
    select,
    where: {
      price: {
        equals: price,
      },
    },
  });
};

const fetchLocations = () => {
  return prisma.location.findMany();
};

const fetchCuisines = () => {
  return prisma.cuisine.findMany();
};

//
const SearchPage = async ({ searchParams }: SearchParams) => {
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  const restaurants = searchParams.hasOwnProperty("city")
    ? await fetchRestaurantsByCity(searchParams.city?.toLocaleLowerCase())
    : searchParams.hasOwnProperty("cuisine")
    ? await fetchRestaurantsByCuisine(searchParams.cuisine?.toLocaleLowerCase())
    : searchParams.hasOwnProperty("price")
    ? await fetchRestaurantsByPrice(searchParams.price)
    : [];

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar  locations={locations} cuisines={cuisines}/>
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants?.map((restaurant) => (
              <SearchRestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
              />
            ))
          ) : (
            <p className="text-center mt-5">
              Sorry, we found no restaurants in this area
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
