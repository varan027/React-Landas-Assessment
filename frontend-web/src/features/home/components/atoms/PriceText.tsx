import React from "react";

type PriceTextProps = {
  price: string;
};

const PriceText: React.FC<PriceTextProps> = ({ price }) => {
  return (
    <span className="font-semibold text-xs md:text-sm">{price}</span>
  );
};

export default PriceText;
