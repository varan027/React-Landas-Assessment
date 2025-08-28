import React from "react";
import classNameMerge from "../../../../shared/utils/classNameMerge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, variant ="primary", className, ...props }) => {
  const base =
    "w-full py-4 rounded-lg font-semibold transition disabled:bg-[#e5e5e5] disabled:cursor-not-allowed";
  const styles =
    variant === "secondary" ? "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50" : "bg-yellow-400 hover:bg-yellow-500 text-[#b2b2b2]";

  return (
    <button className={classNameMerge(`${base} ${styles}`, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
