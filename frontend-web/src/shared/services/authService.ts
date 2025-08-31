// src/shared/services/authService.ts
export interface LoginResponse {
  user: {
    id: string;
    username: string;
    email: string;
  };
  token: string;
}

export async function login(id: string, password: string): Promise<LoginResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === "admin" && password === "1234") {
        resolve({
          user: {
            id: "1",
            username: "관리자",
            email: "admin@example.com",
          },
          token: "fake-jwt-token-123",
        });
      } else {
        reject(new Error("아이디 또는 비밀번호가 올바르지 않습니다."));
      }
    }, 1000); 
  });
}
