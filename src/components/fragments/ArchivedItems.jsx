import { Link } from "react-router-dom";
import Card from "../elements/card/Card";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import { useContext } from "react";
import { DarkMode } from "../../context/ThemeContext";

export default function ArchivedItems({ id, title, body, dates }) {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <Card>
      <div className="mb-3">
        <h1
          className={`text-xl text-slate-600 font-bold hover:text-slate-500 duration-200 ${
            isDarkMode && "text-slate-200 hover:text-slate-100"
          }`}
        >
          <Link to={`/notes/${id}`}>{title}</Link>
        </h1>
        <p
          className={`text-sm text-slate-500 ${isDarkMode && "text-slate-400"}`}
        >
          {dates}
        </p>
      </div>
      <div>
        <div
          className={`prose prose-slate break-words ${
            isDarkMode && "text-slate-400"
          }`}
        >
          {parser(body)}
        </div>
      </div>
    </Card>
  );
}

ArchivedItems.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
};
