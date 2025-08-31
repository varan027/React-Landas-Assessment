import React, { useState } from "react";
import InputWithLabel from "../molecules/InputWithLabel";
import PasswordField from "../molecules/PasswordField";
import Checkbox from "../../../../shared/components/Checkbox";
import Button from "../../../../shared/components/Button";
import { useAuthStore } from "../../../../shared/stores/useAuthStore";
import { useNavigate } from "react-router-dom";
import { login } from "../../../../shared/services/authService";

const LoginForm: React.FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { login: loginUser } = useAuthStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await login(id, password);

      loginUser(res.user, res.token);

      navigate("/home");
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[340px] md:w-2xl md:px-32 md:pb-48 mt-12 py-20 mx-auto bg-white p-6 rounded-2xl"
    >
      <h2 className="text-4xl font-extrabold text-center text-yellow-400 mb-16 md:mb-22">
        LANDAS
      </h2>

      <InputWithLabel
        label="아이디"
        name="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
        error={error && id === "" ? error : undefined}
        placeholder="아이디를 입력해주세요."
      />

      <PasswordField
        label="비밀번호"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={error && password === "" ? error : undefined}
        placeholder="비밀번호를 입력해주세요."
      />

      {error && (
        <p className="text-red-500 text-xs text-center mb-6 mr-12 md:mr-5">{error}</p>
      )}

      <div className="flex items-center justify-between mb-12 mt-12 md:mt-6">
        <Checkbox label="아이디 저장" />
        <a href="#" className="text-xs font-semibold">
          아이디 찾기 | 비밀번호 찾기
        </a>
      </div>

      <Button disabled={loading || id === "" || password === ""} type="submit">
        {loading ? "로그인 중..." : "로그인"}
      </Button>

      <Button variant="secondary" className="mt-3">
        회원가입
      </Button>
    </form>
  );
};

export default LoginForm;
