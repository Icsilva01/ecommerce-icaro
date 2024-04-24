import { Route, Routes } from "react-router-dom";
import { About, Contact, ForgetPassword, Home, Login, SignUp, Error } from "../presentation";

export const Router = () => {
  // const { token } = useAuth();

  return (
    <Routes>
      <Route path={"/signup"} element={<SignUp />} />
      <Route path={"/forget-password"} element={<ForgetPassword />} />
      <Route path={"/"} element={<Home />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/contact"} element={<Contact />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/error404"} element={<Error />} />
      
      {/* <Route path="/*" element={token ? <PrivateRoutes /> : <Login/>} /> */}
    </Routes>
  );
};