import SearchBar from "../elements/searchBar/SearchBar";
import PropTypes from "prop-types";

export default function Header({ keyword, onKeywordChangeHandler }) {
  return (
    <section className="shadow font-inter">
      <header className="container overflow-hidden p-5 mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl ">
            <span className="text-sky-500 font-bold">Net</span>Notes
          </h1>
        </div>
        <div>
          <SearchBar
            keyword={keyword}
            onKeywordChangeHandler={onKeywordChangeHandler}
          />
        </div>
      </header>
    </section>
  );
}
Header.propTypes = {
  onKeywordChangeHandler: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};
