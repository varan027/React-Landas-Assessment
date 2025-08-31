import React from "react";

type HeadingProps = {
  children: React.ReactNode;
};

const ProductHeading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h2 className="text-lg font-semibold text-center mb-2">
      {children}
    </h2>
  );
};

export default ProductHeading;
