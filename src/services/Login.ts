
import { getClientId } from "../utils/getClientId";
import { axios } from "./Axios";

export interface loginPayload {
  email: string;
  password: string;
}
const clientId = getClientId();
export const userLogin = (payload: loginPayload) => {
  return axios.post('/login', { ...payload, clientId });
};
