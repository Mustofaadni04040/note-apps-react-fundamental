import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import SearchBar from "../elements/searchBar/SearchBar";
import { IoIosLogOut } from "react-icons/io";

export default function Header({ keyword, onKeywordChangeHandler }) {
  const location = useLocation();

  return location.pathname === "/login" ||
    location.pathname === "/register" ? null : (
    <section className="shadow font-inter">
      <header className="container overflow-hidden p-5 mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl lg:text-2xl">
            <span className="text-sky-500 font-bold">Ad</span>Notes
          </h1>
        </div>
        <div className="flex items-center">
          {location.pathname !== "/notes/new" && (
            <SearchBar
              keyword={keyword}
              onKeywordChangeHandler={onKeywordChangeHandler}
            />
          )}
          <IoIosLogOut />
        </div>
      </header>
    </section>
  );
}

Header.propTypes = {
  onKeywordChangeHandler: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};
