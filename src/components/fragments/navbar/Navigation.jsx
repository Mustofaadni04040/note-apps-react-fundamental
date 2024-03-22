import { Link, useLocation } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import Button from "../../button/Button";
import { FaArrowLeft } from "react-icons/fa";

export default function Navigation() {
  const location = useLocation();

  return (
    <section className="mt-7">
      <nav className="container px-5 mx-auto">
        <div className="flex justify-between items-center">
          {!location.pathname.startsWith("/notes/") ? (
            <ul className="flex items-center">
              <li>
                <Link
                  to="/"
                  className={
                    location.pathname === "/"
                      ? "border border-sky-500 py-1 px-4 rounded bg-sky-500 text-white mr-5"
                      : "py-1 px-4 rounded hover:border-slate-100 hover:bg-slate-100  mr-5"
                  }
                >
                  Aktif
                </Link>
              </li>
              <li>
                <Link
                  to="/archives"
                  className={
                    location.pathname === "/archives"
                      ? "border border-sky-500 py-1 px-4 rounded bg-sky-500 text-white"
                      : "py-1 px-4 rounded hover:border-slate-100 hover:bg-slate-100"
                  }
                >
                  Arsip
                </Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/" className="text-sky-500">
                  <FaArrowLeft />
                </Link>
              </li>
            </ul>
          )}
          {location.pathname === "/" && (
            <Button>
              Tambah
              <IoIosAdd className="text-xl" />
            </Button>
          )}
        </div>
      </nav>
    </section>
  );
}
