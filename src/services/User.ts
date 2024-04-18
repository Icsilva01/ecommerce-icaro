import { axiosAuth } from "./Axios";

export const getUserInfo = () => {
  return axiosAuth().get("/user");
};
