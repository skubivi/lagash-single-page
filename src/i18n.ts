import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend, { HttpBackendOptions } from "i18next-http-backend";
import { Languages, getLanguageFromLocalStorage } from "./utils";

const initialLanguage = getLanguageFromLocalStorage()
if (initialLanguage === Languages.He) document.body.dir = 'rtl'

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: [
      "firstBlock",
      "headerBlock",
      "secondBlock",
      "thirdBlock",
      "fourthBlock",
      "fifthBlock",
      "sixthBlock",
      "seventhBlock",
      "footerBlock",
      "languageSwitcher",
      "modal"
    ],
    lng: initialLanguage,
    fallbackLng: [Languages.Ru, Languages.En, Languages.He],
    interpolation: { escapeValue: false },
});
