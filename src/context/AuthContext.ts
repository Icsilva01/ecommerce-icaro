/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";
import { AuthModel } from "../utils/authHelper";
import { loginPayload } from "../services/Login";

export interface User {
  banks: string;
  birthday: string;
  cpf: string;
  education: string;
  email: string;
  hasAndroid: boolean;
  hasCreditCard: boolean;
  hasOwnHouse: boolean;
  hasRestriction: boolean;
  hasVehicle: boolean;
  id: string;
  income: number;
  name: string;
  occupation: string;
  phone: string;
  socialName: string;
  zipCode: string;
  status: boolean;
  userExtraData?: any;
}

export interface AuthContextProps {
  user: User | undefined;
  token: AuthModel | undefined;
  refreshAuth: () => void;
  logout: () => void;
  makeLogin: (e: loginPayload) => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextProps>({
  user: undefined,
  token: undefined,
  refreshAuth: () => {},
  logout: () => {},
  makeLogin: async () => await false,
});
