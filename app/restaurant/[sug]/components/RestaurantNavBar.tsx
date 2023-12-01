import Link from "next/link";

const RestaurantNavBar = () => {
  return (
    <nav className="flex text-reg border-b pb-2">
      <a href="/restaurant/milestone-grill" className="mr-7">
        Overview
      </a>
      <Link href="/restaurant/milestone-grill/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
};

export default RestaurantNavBar;
