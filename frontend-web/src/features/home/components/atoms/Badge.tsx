import React from "react";

type BadgeProps = {
  text: string;
};

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <span className="bg-[#fffcf3] text-[#594504] border border-[#ffedb3] text-[10px] my-auto text-xs p-1 rounded-lg font-semibold tracking-tighter">
      {text}
    </span>
  );
};

export default Badge;
