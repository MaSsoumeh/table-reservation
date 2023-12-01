import { PRICE } from "@prisma/client";
import React from "react";

type Props = {
  price: PRICE;
};
const Price = (props: Props) => {
  switch (props.price) {
    case PRICE.CHEAP: {
      return (
        <>
          <span>$$</span>
          <span className="text-mint-light">$$</span>
        </>
      );
    }
    case PRICE.REGULAR: {
      return (
        <>
          <span>$$$</span>
          <span className="text-mint-light">$</span>
        </>
      );
    }
    case PRICE.EXPENSIVE: {
      return (
        <>
          <span className="text-red">$$$$</span>
        </>
      );
    }
  }
};

export default Price;
