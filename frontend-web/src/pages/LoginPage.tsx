import React from "react";
import LoginForm from "../features/auth/components/organisms/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-yellow-50 px-4">
      <LoginForm />

      <footer className="text-center text-xs text-gray-500 mt-6 mb-12">
        Copyright © WWW.idsb2bmall.com All rights reserved.
      </footer>
    </div>
  );
};

export default LoginPage;
