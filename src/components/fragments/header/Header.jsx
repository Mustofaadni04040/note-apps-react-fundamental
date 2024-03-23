import SearchBar from "../../elements/searchBar/SearchBar";
import PropTypes from "prop-types";

export default function Header({ onKeywordChangeHandler }) {
  return (
    <section className="shadow">
      <header className="container p-5 mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl ">
            <span className="text-sky-500 font-bold">Net</span>Notes
          </h1>
        </div>
        <div>
          <SearchBar onKeywordChangeHandler={onKeywordChangeHandler} />
        </div>
      </header>
    </section>
  );
}
Header.propTypes = {
  onKeywordChangeHandler: PropTypes.func.isRequired,
};
