import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("isDarkMode");
    return storedTheme === "true" ? true : false;
  });

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export const DarkMode = DarkModeContext;
