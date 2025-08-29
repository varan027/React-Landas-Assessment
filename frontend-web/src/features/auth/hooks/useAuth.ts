import { useAuthStore } from "../../../shared/stores/useAuthStore";

export const useAuth = () => {
  const { user, token, login, logout } = useAuthStore();

  return {
    user,
    token,
    login,
    logout,
    isAuthenticated: Boolean(token),
  };
};
