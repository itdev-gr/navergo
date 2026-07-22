import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import el from "./locales/el.json";
import en from "./locales/en.json";

const STORAGE_KEY = "navergo.lang";
const SUPPORTED = ["el", "en"];

function initialLanguage() {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED.includes(stored)) return stored;
  return "en";
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      el: { translation: el },
      en: { translation: en },
    },
    lng: initialLanguage(),
    fallbackLng: "en",
    supportedLngs: SUPPORTED,
    interpolation: { escapeValue: false },
    returnNull: false,
  });

i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, lng);
  }
});

export default i18n;
