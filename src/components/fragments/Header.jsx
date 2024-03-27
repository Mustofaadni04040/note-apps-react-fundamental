import { useLocation } from "react-router-dom";
import SearchBar from "../elements/searchBar/SearchBar";
import PropTypes from "prop-types";

export default function Header({ keyword, onKeywordChangeHandler }) {
  const location = useLocation();

  return (
    <section className="shadow font-inter">
      <header className="container overflow-hidden p-5 mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl lg:text-2xl">
            <span className="text-sky-500 font-bold">Ad</span>Notes
          </h1>
        </div>
        <div>
          {location.pathname !== "/notes/new" && (
            <SearchBar
              keyword={keyword}
              onKeywordChangeHandler={onKeywordChangeHandler}
            />
          )}
        </div>
      </header>
    </section>
  );
}

Header.propTypes = {
  onKeywordChangeHandler: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};
