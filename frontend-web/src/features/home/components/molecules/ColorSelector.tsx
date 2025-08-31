import React from "react";
import ColorDot from "../atoms/ColorDot";

type ColorSelectorProps = {
  colors: string[];
};

const ColorSelector: React.FC<ColorSelectorProps> = ({ colors }) => {
  return (
    <div className="flex justify-center mt-3 space-x-1 sm:space-x-2">
      {colors.map((color, index) => (
        <ColorDot key={index} color={color} />
      ))}
    </div>
  );
};

export default ColorSelector;
