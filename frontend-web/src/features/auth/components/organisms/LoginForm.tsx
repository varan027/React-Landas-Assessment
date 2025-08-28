import React, { useState } from "react";
import InputWithLabel from "../molecules/InputWithLabel";
import PasswordField from "../molecules/PasswordField";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";
import { login } from "../../services/authService";
import { useAuthStore } from "../../../../shared/stores/useAuthStore";

const LoginForm: React.FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { login: loginUser } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(id, password);
      loginUser(res.user, res.token);
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-sm md:w-lg h-150 mx-auto bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-bold text-center text-yellow-500 mb-6">LANDAS</h2>
      <InputWithLabel label="아이디" name="id" value={id} onChange={(e) => setId(e.target.value)}/>
      <PasswordField
        label="비밀번호"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <div className="flex items-center justify-between mb-4">
        <Checkbox label="아이디 저장" />
        <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
          아이디 찾기 | 비밀번호 찾기
        </a>
      </div>
      
      <Button disabled={id === "" || password === ""}  type="submit">로그인</Button>
      <Button variant={"secondary"} className="mt-2">
        회원가입
      </Button>
    </form>
  );
};

export default LoginForm;
