import { Route, Routes } from "react-router-dom";
import { Home } from "../presentation";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path={"/*"} element={<Home />} />
    </Routes>
  );
};