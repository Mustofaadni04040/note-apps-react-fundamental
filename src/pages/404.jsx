import { Link, useLocation } from "react-router-dom";
import Button from "../components/elements/button/Button";

export default function ErrorPage() {
  const notFoundPage = useLocation();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-9xl mb-3 font-bold text-sky-500">404</h1>
      <p className="text-lg font-bold">Terjadi kesalahan.</p>
      <p className="text-sm mb-5">{`Oops! - ${notFoundPage.pathname} halaman tidak ditemukan`}</p>
      <Button type="button">
        <Link to="/">Kembali ke Home</Link>
      </Button>
    </div>
  );
}
