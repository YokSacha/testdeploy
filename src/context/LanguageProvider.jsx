import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./useLanguage";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem("kenetix-language");
<<<<<<< HEAD
    return savedLanguage === "en" ? "en" : "th";
=======
    return savedLanguage === "en" ? "en" : "en";
>>>>>>> dd6513017cd14769dbc41f58ffdb2ef8f2777899
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
