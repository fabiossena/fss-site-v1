import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import "./index.css";

import i18n from "@/i18n/config";
import { LanguageProvider } from "@/context/LanguageContext";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18n}>
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </LanguageProvider>
  </I18nextProvider>
);
