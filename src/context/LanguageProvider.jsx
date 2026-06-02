import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./useLanguage";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem("kenetix-language");
    return savedLanguage === "en" ? "en" : "en";
  });

  useEffect(() => {
    window.localStorage.setItem("kenetix-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      isThai: language === "th",
      setLanguage,
      toggleLanguage: () =>
        setLanguage((currentLanguage) =>
          currentLanguage === "th" ? "en" : "th",
        ),
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
