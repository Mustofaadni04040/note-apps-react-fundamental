import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function AuthLayouts({ title, type, children }) {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-sky-500 text-3xl font-bold mb-2">{title}</h1>
        {type === "login" ? (
          <div className="mb-3">
            <h1 className="text-4xl text-sky-500 font-bold mb-2">Login</h1>
            <p className="text-slate-500 text-sm">
              Silahkan masukan username dan password anda
            </p>
          </div>
        ) : (
          <div className="mb-3">
            <h1 className="text-4xl text-sky-500 font-bold mb-2">Register</h1>
            <p className="text-slate-500 text-sm">
              Silahkan daftar terlebih dahulu
            </p>
          </div>
        )}
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
}

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="mt-3 text-center text-sm">
        Tidak punya akun?
        <Link to="/register" className="text-sky-500 font-bold">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="mt-3 text-center text-sm">
        Sudah punya akun?
        <Link to="/" className="text-sky-500 font-bold">
          Login
        </Link>
      </p>
    );
  }
};

Navigation.propTypes = {
  type: PropTypes.string,
};

AuthLayouts.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  type: PropTypes.string,
};
