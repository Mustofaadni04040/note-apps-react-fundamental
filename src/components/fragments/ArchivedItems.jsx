import { Link } from "react-router-dom";
import Card from "../elements/card/Card";
import PropTypes from "prop-types";
import parser from "html-react-parser";

export default function ArchivedItems({ id, title, body, dates }) {
  return (
    <Card>
      <div className="mb-3">
        <h1 className="text-xl text-slate-600 font-bold hover:text-slate-500">
          <Link to={`/notes/${id}`}>{title}</Link>
        </h1>
        <p className="text-sm text-slate-500">{dates}</p>
      </div>
      <div>
        <div className="prose prose-slate break-words">{parser(body)}</div>
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
