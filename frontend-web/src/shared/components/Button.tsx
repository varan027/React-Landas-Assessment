import React from "react";
import classNameMerge from "../utils/classNameMerge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  const base =
    "w-full rounded-lg font-semibold text-sm transition disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-yellow-400 hover:bg-yellow-500 text-white",
    secondary: "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50",
  };

  const sizes = {
    sm: "py-2 text-xs",
    md: "py-3 text-sm",
    lg: "py-4 text-base",
  };

  return (
    <button
      className={classNameMerge(`${base} ${variants[variant]} ${sizes[size]}`, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
