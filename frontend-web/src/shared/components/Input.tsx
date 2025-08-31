import React from "react";
import classNameMerge from "../utils/classNameMerge";
import ErrorText from "./ErrorText";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input: React.FC<InputProps> = ({ className, error, ...props }) => {
  return (
    <div className="w-full">
      <input
        className={classNameMerge(
          `w-full px-4 py-3 text-xs rounded-lg
          ${error ? "border-red-500" : "border-gray-300"}
          focus:outline-none focus:border-2 focus:border-yellow-400 bg-gray-50 focus:bg-white`,
          className
        )}
        {...props}
      />
      {error && <ErrorText message={error} />}
    </div>
  );
};

export default Input;
