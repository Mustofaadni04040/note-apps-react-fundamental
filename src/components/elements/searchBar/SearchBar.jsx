import { CiSearch } from "react-icons/ci";
import PropTypes from "prop-types";
import { useContext } from "react";
import { DarkMode } from "../../../context/ThemeContext";
import { Locale } from "../../../context/LocaleContext";

export default function SearchBar({ keyword, onKeywordChangeHandler }) {
  const { isDarkMode } = useContext(DarkMode);
  const { locale } = useContext(Locale);

  return (
    <div
      className={`border-b-[1px] flex relative items-center ${
        isDarkMode && "border-slate-300"
      }`}
    >
      <CiSearch className="text-slate-500 text-xl" />
      <input
        type="text"
        placeholder={` ${
          locale === "id" ? "Cari berdasarkan judul..." : "Search by title..."
        }`}
        value={keyword}
        onChange={(e) => onKeywordChangeHandler(e.target.value)}
        className={`p-1 bg-transparent rounded min-w-40 outline-none focus:min-w-72 transition-all duration-500 ${
          isDarkMode && "placeholder:text-slate-300 text-slate-300"
        }`}
      />
    </div>
  );
}

SearchBar.propTypes = {
  onKeywordChangeHandler: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};
