import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="border-b-[1px] flex relative items-center">
      <CiSearch className="text-slate-500 text-xl" />
      <input
        type="text"
        placeholder="Cari berdasarkan judul..."
        className="p-1 rounded min-w-40 outline-none focus:min-w-72 transition-all duration-500"
      />
    </div>
  );
}
