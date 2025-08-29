import React from "react";

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label: string;
  size?: "sm" | "md" | "lg";
}

const Checkbox: React.FC<CheckboxProps> = ({ label, size = "md", id, ...props }) => {
  const sizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div className="flex items-center gap-2">
      <input
        id={id}
        type="checkbox"
        className={`accent-yellow-400 ${sizes[size]} disabled:cursor-not-allowed disabled:opacity-60`}
        {...props}
      />
      <label htmlFor={id} className="cursor-pointer text-xs font-semibold">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
