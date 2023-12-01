import Link from "next/link";

type Props = {
  slug: string;
};

const RestaurantNavBar = (props: Props) => {
  return (
    <nav className="flex text-reg border-b pb-2">
      <a href={`/restaurant/${props.slug}`} className="mr-7">
        Overview
      </a>
      <Link href={`/restaurant/${props.slug}/menu`} className="mr-7">
        Menu
      </Link>
    </nav>
  );
};

export default RestaurantNavBar;
