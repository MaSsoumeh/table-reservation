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
export type SearchParams = {
  city?: string;
  cuisine?: string;
  price?: PRICE;
};

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
const fetchRestaurantsBySearchParams = (searchParams: SearchParams) => {
  const conditions: any = {};

  if (searchParams.city) {
    conditions.location = {
      name: {
        equals: searchParams.city.toLocaleLowerCase(),
      },
    };
  }
  if (searchParams.cuisine) {
    conditions.cuisine = {
      name: {
        equals: searchParams.cuisine.toLocaleLowerCase(),
      },
    };
  }
  if (searchParams.price) {
    conditions.price = {
      equals: searchParams.price,
    };
  }

  return prisma.restaurant.findMany({
    where: conditions,
    select,
  });
};

const fetchLocations = () => {
  return prisma.location.findMany();
};

const fetchCuisines = () => {
  return prisma.cuisine.findMany();
};

//
const SearchPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const restaurants = await fetchRestaurantsBySearchParams(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
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
