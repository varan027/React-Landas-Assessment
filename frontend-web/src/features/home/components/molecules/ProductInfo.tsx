import React from "react";
import Badge from "../atoms/Badge";
import PriceText from "../atoms/PriceText";

type ProductInfoProps = {
  title: string;
  brand: string;
  badge?: string;
  price: string;
};

const ProductInfo: React.FC<ProductInfoProps> = ({ title, brand, badge, price }) => {
  return (
    <div className="mt-4">
      <h3 className="text-xs sm:text-base mb-2 font-semibold truncate">{title}</h3>
      <p className="text-xs mb-2 text-gray-600 truncate">{brand}</p>
      <div className="mt-1 flex space-x-2">
        {badge && <Badge text={badge} />}
        <PriceText price={price} />
      </div>
    </div>
  );
};

export default ProductInfo;
