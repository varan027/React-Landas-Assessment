import React, { useState } from "react";
import Label from "../../../../shared/components/Label";
import Input from "../../../../shared/components/Input";
import { PiEye, PiEyeSlash } from "react-icons/pi";

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
}

const PasswordField: React.FC<Props> = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="md:flex mb-4">
      <Label htmlFor={name}>{label}</Label>
      <div className="relative w-full">
        <Input
          id={name}
          name={name}
          type={visible ? "text" : "password"}
          value={value}
          onChange={onChange}
          error={error}
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={() => setVisible(!visible)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute inset-y-0 right-3 flex items-center text-xl text-gray-600"
        >
          {visible ? <PiEyeSlash /> : <PiEye />}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
