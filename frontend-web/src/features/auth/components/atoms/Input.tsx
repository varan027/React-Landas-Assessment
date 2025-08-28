import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input: React.FC<InputProps> = ({ error, ...props }) => {
  return (
    <div className="relative w-full">
      <input
        className={`w-full px-4 py-2 rounded-lg ${
          error ? "border-red-500" : "" } focus:outline-none focus:border-2 focus:border-yellow-400 bg-gray-50 focus:bg-white`}
        {...props}
      />
       { error && <p className=" absolute -bottom-6 text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
