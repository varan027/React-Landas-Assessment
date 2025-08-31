import React from "react";
import ColorSelector from "./ColorSelector";
import ProductInfo from "./ProductInfo";

type ProductCardProps = {
  image: string;
  title: string;
  brand: string;
  price: string;
  colors: string[];
  badge?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  brand,
  price,
  colors,
  badge,
}) => {
  return (
    <div className="w-full max-w-[230px] bg-white">
      <img src={image} alt={title} className="w-full object-contain" />
      <ColorSelector colors={colors} />
      <ProductInfo title={title} brand={brand} price={price} badge={badge} />
    </div>
  );
};

export default ProductCard;
