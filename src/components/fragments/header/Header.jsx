import SearchBar from "../../elements/searchBar/SearchBar";

export default function Header() {
  return (
    <section className="shadow">
      <header className="container p-5 mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl ">
            <span className="text-sky-500 font-bold">Net</span>Notes
          </h1>
        </div>
        <div>
          <SearchBar />
        </div>
      </header>
    </section>
  );
}
