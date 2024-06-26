import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ns1 from "./locales/ptBr.json";
import ns2 from "./locales/en.json";

export const defaultNS = "translation";
export const resources = {
  ptBr: {
    ...ns1,
  },
  en: {
    ...ns2,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: "ptBr",
  ns: ["translation"],
  defaultNS,
  resources,
});
