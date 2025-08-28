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
}

const InputWithLabel: React.FC<Props> = ({ label, name, type = "text", value, onChange, error }) => (
  <div className="mb-10 md:flex">
    <Label htmlFor={name}>{label}</Label>
    <Input id={name} name={name} type={type} value={value} onChange={onChange} error={error} placeholder="아이디를 입력해 주세요." />
  </div>
);

export default InputWithLabel;
