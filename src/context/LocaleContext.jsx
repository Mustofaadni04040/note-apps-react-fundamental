import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

const LocaleContext = createContext();
export default function LocaleContextProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    const storedLocale = localStorage.getItem("locale");
    return storedLocale === "id" ? "id" : "en";
  });

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
LocaleContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export const Locale = LocaleContext;
