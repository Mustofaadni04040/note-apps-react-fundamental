import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import SearchBar from "../elements/searchBar/SearchBar";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { useContext } from "react";
import { DarkMode } from "../../context/ThemeContext";
import { Locale } from "../../context/LocaleContext";

export default function Header({
  keyword,
  onKeywordChangeHandler,
  logout,
  name,
}) {
  const location = useLocation();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const { locale, setLocale } = useContext(Locale);
  const ToggleTheme = () => {
    setIsDarkMode((prevTheme) => (prevTheme === false ? true : false));
  };
  const Languege = () => {
    setLocale((prevLocale) => (prevLocale === "id" ? "en" : "id"));
  };

  return (
    <section
      className={`shadow font-inter ${isDarkMode && "shadow-slate-900"}`}
    >
      <header className="container overflow-hidden p-5 mx-auto flex justify-between items-center">
        <div>
          <h1
            className={`text-xl lg:text-2xl ${isDarkMode && "text-slate-300"}`}
          >
            <span className="text-sky-500 font-bold">Ad</span>Notes
          </h1>
        </div>
        <div className="flex items-center gap-5">
          {location.pathname !== "/notes/new" &&
            !location.pathname.startsWith("/notes/") && (
              <SearchBar
                keyword={keyword}
                onKeywordChangeHandler={onKeywordChangeHandler}
              />
            )}
          <div className="flex items-center gap-2">
            <button
              onClick={Languege}
              className={`flex items-center text-xl text-sky-500 ${
                isDarkMode && "text-slate-300"
              }`}
            >
              <IoLanguage /> {locale}
            </button>
            <button onClick={ToggleTheme}>
              {isDarkMode ? (
                <MdOutlineLightMode className="text-2l lg:text-3xl text-sky-500" />
              ) : (
                <MdOutlineDarkMode className="text-2l lg:text-3xl text-blue-950" />
              )}
            </button>
            <button
              onClick={logout}
              className={`flex items-center gap-2 ${
                isDarkMode && "text-slate-300"
              }`}
            >
              <IoIosLogOut className="text-2l lg:text-3xl text-red-500" />
              {name}
            </button>
          </div>
        </div>
      </header>
    </section>
  );
}

Header.propTypes = {
  onKeywordChangeHandler: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
