import React from "react";
import Heading from "../atoms/ProductTitle";
import SubHeading from "../atoms/ProductSubtitle";
import ProductCard from "../molecules/ProductCard";

type Product = {
  id: number;
  image: string;
  title: string;
  brand: string;
  price: string;
  colors: string[];
  badge?: string;
};

type ProductSectionProps = {
  heading: string;
  subheading?: string;
  products: Product[];
};

const ProductSection: React.FC<ProductSectionProps> = ({
  heading,
  subheading,
  products,
}) => {
  return (
    <section className="py-16 px-6 sm:px-10 flex flex-col items-center">
      {/* Heading + SubHeading */}
      <Heading>{heading}</Heading>
      {subheading && <SubHeading>{subheading}</SubHeading>}

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 lg:gap-16 mt-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            brand={product.brand}
            price={product.price}
            colors={product.colors}
            badge={product.badge}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
