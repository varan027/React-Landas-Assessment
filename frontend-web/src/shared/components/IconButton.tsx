import React from "react";
import type { IconType } from "react-icons";

interface IconButtonProps {
  icon: IconType;
}

const IconButton: React.FC<IconButtonProps> = ({ icon: Icon }) => {
  return (
    <button className="text-white hover:text-yellow-500 transition px-2">
      <Icon size={22} />
    </button>
  );
};

export default IconButton;
