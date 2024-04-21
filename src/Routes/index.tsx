import { Route, Routes } from "react-router-dom";
import { ForgetPassword, Home, Login, SignUp } from "../presentation";

export const Router = () => {
  // const { token } = useAuth();

  return (
    <Routes>
      <Route path={"/signup"} element={<SignUp />} />
      <Route path={"/forget-password"} element={<ForgetPassword />} />
      <Route path={"/"} element={<Home />} />
      <Route path={"/login"} element={<Login />} />
      
      {/* <Route path="/*" element={token ? <PrivateRoutes /> : <Login/>} /> */}
    </Routes>
  );
};