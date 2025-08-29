export const login = async (id: string, password: string) => {
  // Replace with real API call
  if (id === "test" && password === "1234") {
    return { token: "fake-jwt-token", user: { id, username: "Test User", email: "test@test.com" } };
  }
  throw new Error("아이디 또는 비밀번호가 올바르지 않습니다.");
};

