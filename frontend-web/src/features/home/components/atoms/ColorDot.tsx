import React from "react";

type ColorDotProps = {
  color: string;
};

const ColorDot: React.FC<ColorDotProps> = ({ color }) => {
  return (
    <span
      className={`w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full ${color === "white" ? "border" : ""}`}
      style={{ backgroundColor: color }}
    ></span>
  );
};

export default ColorDot;
