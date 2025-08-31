import React from "react";

const ErrorText: React.FC<{ message?: string }> = ({ message }) =>
  message ? <p className="text-red-500 text-xs mt-1">{message}</p> : null;

export default ErrorText;
