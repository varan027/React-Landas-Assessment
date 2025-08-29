import React from "react";

const Label: React.FC<{ htmlFor: string; children: React.ReactNode }> = ({
  htmlFor,
  children,
}) => (
  <label htmlFor={htmlFor} className="block md:my-auto mb-1 min-w-20 text-xs">
    {children}
  </label>
);

export default Label;
