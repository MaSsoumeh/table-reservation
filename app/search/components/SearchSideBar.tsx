import { PRICE, Location, Cuisine } from "@prisma/client";
import Link from "next/link";
import { SearchParams } from "../page";

//const
const prices = [
  {
    price: PRICE.CHEAP,
    label: "$$",
    className: " rounded-l",
  },
  {
    price: PRICE.REGULAR,
    label: "$$$",
    className: "",
  },
  {
    price: PRICE.EXPENSIVE,
    label: "$$$$",
    className: "rounded-r",
  },
];

//
const SearchSideBar = ({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: {
    city?: string;
    cuisine?: string;
    price?: PRICE;
  };
}) => {
  return (
    <div className="w-1/5 text-primary mr-4">
      <div className="border-b border-mint-light pb-4">
        <div className="mt-3 pb-4 font-bold">
          <div className="flex border-b  border-mint-light pb-4 text-gray-dark">
            <Link
              href={{
                pathname: "/search",
              }}
            >
              clear filters
            </Link>
          </div>
        </div>
        <h1 className="mb-2 font-bold">Region</h1>
        {locations?.map(({ name, id }) => (
          <Link
            key={id}
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                city: name.toLowerCase(),
              },
            }}
          >
            <p
              className={`${
                searchParams.city === name && "text-red"
              }  font-light text-reg cursor-pointer px-2 capitalize  hover:bg-mint-contrast`}
            >
              {name}
            </p>
          </Link>
        ))}
      </div>
      <div className="border-b border-mint-light pb-4 mt-3">
        <h1 className="mb-2 font-bold">Cuisine</h1>
        {cuisines?.map(({ name, id }) => (
          <Link
            key={id}
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                cuisine: name.toLowerCase(),
              },
            }}
          >
            <p
              className={`${
                searchParams.cuisine === name && "text-red"
              }  font-light text-reg cursor-pointer px-2 capitalize hover:bg-mint-contrast`}
            >
              {name}
            </p>
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4 font-bold">
        <h1 className="mb-2">Price</h1>
        <div className="flex px-2">
          {prices.map(({ price, label, className }) => {
            return (
              <Link
                key={price}
                href={{
                  pathname: "/search",
                  query: {
                    ...searchParams,
                    price,
                  },
                }}
              >
                <button
                  className={`${className} ${
                    searchParams.price === price && "text-red"
                  } border border-mint-light w-full text-reg font-light p-2 cursor-pointer hover:bg-mint-contrast`}
                >
                  {label}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchSideBar;
