import { Route, Routes } from "react-router-dom";
import { ForgetPassword, Login, SignUp } from "../presentation";
import { useAuth } from "../utils/useAuth";
import { PrivateRoutes } from "./privateRoutes";

export const Router = () => {
  const { token } = useAuth();

  return (
    <Routes>
      <Route path={"/signup"} element={<SignUp />} />
      <Route path={"/forget-password"} element={<ForgetPassword />} />
      <Route path="/*" element={token ? <PrivateRoutes /> : <Login/>} />
    </Routes>
  );
};