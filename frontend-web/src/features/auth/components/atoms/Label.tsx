import React from "react";

const Label: React.FC<{ htmlFor: string; children: React.ReactNode }> = ({
  htmlFor,
  children,
}) => (
  <label htmlFor={htmlFor} className="block md:my-auto min-w-20 font-semibold">
    {children}
  </label>
);

export default Label;
