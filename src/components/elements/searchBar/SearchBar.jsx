import { CiSearch } from "react-icons/ci";
import PropTypes from "prop-types";

export default function SearchBar({ keyword, onKeywordChangeHandler }) {
  return (
    <div className="border-b-[1px] flex relative items-center">
      <CiSearch className="text-slate-500 text-xl" />
      <input
        type="text"
        placeholder="Cari berdasarkan judul..."
        value={keyword}
        onChange={(e) => onKeywordChangeHandler(e.target.value)}
        className="p-1 rounded min-w-40 outline-none focus:min-w-72 transition-all duration-500"
      />
    </div>
  );
}

SearchBar.propTypes = {
  onKeywordChangeHandler: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};
