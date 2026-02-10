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
import no from "./locales/no.json";
import nl from "./locales/nl.json";
import kr from "./locales/kr.json";
import se from "./locales/se.json";
import dk from "./locales/dk.json";
import pt from "./locales/pt.json";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        br: { translation: br },
        pt: { translation: pt },
        es: { translation: es },
        it: { translation: it },
        fr: { translation: fr },
        de: { translation: de },
        ja: { translation: ja },
        zh: { translation: zh },
        ru: { translation: ru },
        no: { translation: no },
        nl: { translation: nl },
        kr: { translation: kr },
        se: { translation: se },
        dk: { translation: dk }
      },
      lng: "en",
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
