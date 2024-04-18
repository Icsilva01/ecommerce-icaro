import { compareAsc } from "date-fns";
import { ReactNode, useEffect, useState } from "react";
import { AuthContext, AuthContextProps, User } from "../context/AuthContext";
import { AuthModel, getAuth, removeAuth, setAuth } from "../utils/authHelper";
import { loginPayload, userLogin } from "../services/Login";
import { getUserInfo } from "../services/User";

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState<AuthModel | undefined>(getAuth());
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    if (token) {
      const tokenIsValid =
        compareAsc(new Date(token.expires_at), new Date()) == 1;

      if (tokenIsValid) {
        getUserInfo().then((e) => {
          setUser({
            ...e.data,
          });
        });
      } else {
        logout();
      }
    } else {
      const newToken = getAuth();
      setToken(newToken);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const refreshAuth = () => setToken(undefined);

  const makeLogin = (payload: loginPayload) => {
    return userLogin(payload)
      .then((response) => {
        const user = response.data as {
          access_token: string;
          expires_at: string;
          expires_in: string;
          userData: User;
        };
        setAuth({
          access_token: user.access_token,
          expires_at: user.expires_at,
        });
        setToken({
          access_token: user.access_token,
          expires_at: user.expires_at,
        });
        setUser(user.userData);
        return true;
      })
      .catch(() => false);
  };

  const logout = () => {
    setUser(undefined);
    removeAuth();
    window.location.href = "/login";
  };

  const value: AuthContextProps = {
    token,
    user,
    refreshAuth,
    logout,
    makeLogin,
  };

  const loading = !token && !!user;

  return (
    <AuthContext.Provider value={value}>
      {loading ? <>carregando</> : children}
    </AuthContext.Provider>
  );
};
