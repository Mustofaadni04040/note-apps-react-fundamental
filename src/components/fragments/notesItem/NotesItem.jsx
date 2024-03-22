import { Link } from "react-router-dom";
import Card from "../../elements/card/Card";
import PropTypes from "prop-types";
import DeleteButton from "../../elements/iconButton/DeleteButton";
import { IoArchiveOutline } from "react-icons/io5";

export default function NotesItem({
  id,
  title,
  body,
  dates,
  onDeleteCardHandler,
}) {
  return (
    <Card>
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h1 className="text-xl text-slate-600 font-bold hover:text-slate-500">
            <Link to={`/notes/${id}`}>{title}</Link>
          </h1>
          <p className="text-sm text-slate-500">{dates}</p>
        </div>
        <div className="flex gap-3 items-center">
          <IoArchiveOutline />
          <DeleteButton id={id} onDeleteCardHandler={onDeleteCardHandler} />
        </div>
      </div>
      <div>
        <p className="text-slate-500">{body}</p>
      </div>
    </Card>
  );
}

NotesItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  onDeleteCardHandler: PropTypes.func.isRequired,
};
