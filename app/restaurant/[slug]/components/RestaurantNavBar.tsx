import Link from "next/link";

type Props = {
  slug: string;
  activeTab: "menu" | "overview";
};

const RestaurantNavBar = (props: Props) => {
  return (
    <nav className="flex text-reg border-b">
      <a
        href={`/restaurant/${props.slug}`}
        className={`${
          props.activeTab === "overview" && "bg-mint-contrast"
        } mr-5  p-2 hover:bg-mint-light`}
      >
        Overview
      </a>
      <Link
        href={`/restaurant/${props.slug}/menu`}
        className={`${
          props.activeTab === "menu" && "bg-mint-contrast"
        } mr-5  p-2 hover:bg-mint-light`}
      >
        Menu
      </Link>
    </nav>
  );
};

export default RestaurantNavBar;
