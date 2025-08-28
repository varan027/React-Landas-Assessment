import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => (
  <label className="flex items-center gap-2 cursor-pointer text-sm">
    <input type="checkbox" className="accent-yellow-400" {...props} />
    {label}
  </label>
);

export default Checkbox;
