import React from "react";
import Header from "./components/Header";

type Props = {
  children: React.ReactNode;
  params: {
    slug: string;
  };
};
const RestaurantLayout = (props: Props) => {
  return (
    <React.Fragment>
      <Header slug={props.params.slug} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default RestaurantLayout;
