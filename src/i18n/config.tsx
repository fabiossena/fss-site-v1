import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import br from "./locales/br.json";
import es from "./locales/es.json";
import it from "./locales/it.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
import ja from "./locales/ja.json";
import zh from "./locales/zh.json";
import ru from "./locales/ru.json";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        br: { translation: br },
        es: { translation: es },
        it: { translation: it },
        fr: { translation: fr },
        de: { translation: de },
        ja: { translation: ja },
        zh: { translation: zh },
        ru: { translation: ru },
      },
      lng: "en",
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
