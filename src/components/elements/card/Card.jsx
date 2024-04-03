import PropTypes from "prop-types";
import { useContext } from "react";
import { DarkMode } from "../../../context/ThemeContext";

export default function Card({ children }) {
  const { isDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`p-3 w-full shadow border-slate-500 rounded ${
        isDarkMode && "bg-slate-800 shadow-lg"
      }`}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
};
