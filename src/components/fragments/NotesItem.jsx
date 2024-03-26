import { Link } from "react-router-dom";
import Card from "../elements/card/Card";
import PropTypes from "prop-types";

export default function NotesItem({ id, title, body, dates }) {
  return (
    <Card>
      <div className="mb-3">
        <h1 className="text-xl text-slate-600 font-bold hover:text-slate-500">
          <Link to={`/notes/${id}`}>{title}</Link>
        </h1>
        <p className="text-sm text-slate-500">{dates}</p>
      </div>
      <div>
        <p className="text-slate-500 break-words">{body}</p>
      </div>
    </Card>
  );
}

NotesItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
};
