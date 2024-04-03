import PropTypes from "prop-types";
import { useContext, useEffect, useRef, useState } from "react";
import { DarkMode } from "../../../context/ThemeContext";
import { Locale } from "../../../context/LocaleContext";
import { BiSearch } from "react-icons/bi";

export default function SearchBar({ keyword, onKeywordChangeHandler }) {
  const { isDarkMode } = useContext(DarkMode);
  const { locale } = useContext(Locale);
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  function showInputHandler() {
    setShowInput(!showInput);
  }

  return (
    <div
      className={`flex items-center gap-3 sm:gap-0 ${
        isDarkMode && "border-slate-300"
      }`}
    >
      <button onClick={showInputHandler}>
        <BiSearch className="text-slate-700 text-xl lg:text-2xl hover:text-slate-600 duration-200" />
      </button>
      {showInput && (
        <input
          type="text"
          placeholder={` ${
            locale === "id" ? "Cari berdasarkan judul..." : "Search by title..."
          }`}
          ref={inputRef}
          value={keyword}
          onChange={(e) => onKeywordChangeHandler(e.target.value)}
          className={`p-[2px] absolute top-16 right-4 border bg-white rounded min-w-40 outline-none placeholder:text-sm sm:static sm:top-0 sm:right-0 sm:border-none sm:bg-transparent ${
            isDarkMode && "placeholder:text-slate-300 text-slate-300"
          }`}
        />
      )}
    </div>
  );
}

SearchBar.propTypes = {
  onKeywordChangeHandler: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};
