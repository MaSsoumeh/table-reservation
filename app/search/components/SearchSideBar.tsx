import { prisma } from "@/app/lib/service";
import { makeFirstUpperCase } from "@/app/lib/utils";
import { PRICE } from "@prisma/client";
import Link from "next/link";

//fetchData
const fetchLocations = () => {
  return prisma.location.findMany();
};

const fetchCuisines = () => {
  return prisma.cuisine.findMany();
};

//
const SearchSideBar = async () => {
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <div className="w-1/5 text-primary mr-4">
      <div className="border-b border-mint-light pb-4">
        <h1 className="mb-2 font-bold">Region</h1>
        {locations?.map((location) => (
          <Link
            key={location.id}
            href={`/search?city=${location.name.toLowerCase()}`}
          >
            <p className="font-light text-reg cursor-pointer  hover:bg-mint-contrast">
              {makeFirstUpperCase(location.name)}
            </p>
          </Link>
        ))}
      </div>
      <div className="border-b border-mint-light pb-4 mt-3">
        <h1 className="mb-2 font-bold">Cuisine</h1>
        {cuisines?.map((cuisine) => (
          <Link
            key={cuisine.id}
            href={`/search?cuisine=${cuisine.name.toLowerCase()}`}
          >
            <p className="font-light text-reg cursor-pointer  hover:bg-mint-contrast">
              {makeFirstUpperCase(cuisine.name)}
            </p>
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4 font-bold">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <Link href={`/search?price=${PRICE.CHEAP}`}>
            <button className="border w-full text-reg font-light rounded-l p-2 cursor-pointer hover:bg-mint-contrast">
              $$
            </button>
          </Link>
          <Link href={`/search?price=${PRICE.REGULAR}`}>
            <button className="border-r border-t border-b w-full text-reg font-light p-2 cursor-pointer  hover:bg-mint-contrast">
              $$$
            </button>
          </Link>
          <Link href={`/search?price=${PRICE.EXPENSIVE}`}>
            <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r cursor-pointer  hover:bg-mint-contrast">
              $$$$
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchSideBar;
