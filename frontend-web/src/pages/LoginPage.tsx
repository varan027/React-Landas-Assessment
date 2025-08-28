import React from "react";
import LoginForm from "../features/auth/components/organisms/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50/50 to-white">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
