import React, { useState } from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import { PiEye, PiEyeSlash } from "react-icons/pi";

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const PasswordField: React.FC<Props> = ({ label, name, value, onChange, error }) => {
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
          placeholder="비밀번호를 입력해주세요."
        />
        <span
          onClick={() => setVisible(!visible)}
          className="absolute right-4 top-3.5 cursor-pointer"
        >
          {visible ? <PiEye/> : <PiEyeSlash />}
        </span>
      </div>
    </div>
  );
};

export default PasswordField;
