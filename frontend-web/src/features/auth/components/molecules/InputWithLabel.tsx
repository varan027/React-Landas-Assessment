import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

interface Props {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
}

const InputWithLabel: React.FC<Props> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  required
}) => (
  <div className="mb-6 md:flex md:items-center">
    <Label htmlFor={name}>{label}{required && <span className="text-red-500 ml-1">*</span>}</Label>
    <Input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      error={error}
      placeholder={placeholder}
    />
  </div>
);

export default InputWithLabel;
