import React from "react";

type SubHeadingProps = {
  children: React.ReactNode;
};

const SubHeading: React.FC<SubHeadingProps> = ({ children }) => {
  return (
    <p className="text-xs sm:text-sm font-semibold text-gray-700 text-center mb-6">
      {children}
    </p>
  );
};

export default SubHeading;
