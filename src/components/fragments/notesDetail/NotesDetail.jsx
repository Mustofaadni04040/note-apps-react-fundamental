import PropTypes from "prop-types";
import DeleteButton from "../../elements/iconButton/DeleteButton";
import ArchiveButton from "../../elements/iconButton/ArchiveButton";

export default function NotesDetail({
  title,
  dates,
  body,
  onHandlerDeleteNote,
  id,
}) {
  return (
    <div className="border p-5 border-slate-200 rounded-lg min-h-screen">
      <div className="flex items-center justify-between">
        <div className="mb-3">
          <h1 className="text-xl text-slate-600 font-bold hover:text-slate-500">
            {title}
          </h1>
          <p className="text-sm text-slate-500">{dates}</p>
        </div>
        <div className="flex items-center gap-3">
          <ArchiveButton />
          <DeleteButton id={id} onHandlerDeleteNote={onHandlerDeleteNote} />
        </div>
      </div>
      <div>
        <p className="text-slate-500">{body}</p>
      </div>
    </div>
  );
}
NotesDetail.propTypes = {
  title: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onHandlerDeleteNote: PropTypes.func.isRequired,
};
