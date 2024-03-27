import PropTypes from "prop-types";
import DeleteButton from "../elements/iconButton/DeleteButton";
import ArchiveButton from "../elements/iconButton/ArchiveButton";
import UnArchiveButton from "../elements/iconButton/UnarchiveButton";

export default function NotesDetail({
  title,
  dates,
  body,
  id,
  archived,
  onHandlerDeleteActiveNote,
  onHandlerDeleteArchivedNote,
  onHandlerArchivedNote,
  onHandlerUnArchivedPage,
}) {
  return (
    <section className="mt-7 font-inter">
      <div className="container mx-auto border p-5 border-slate-200 rounded-lg min-h-screen">
        <div className="flex items-center justify-between">
          <div className="mb-3">
            <h1 className="text-xl text-slate-600 font-bold">{title}</h1>
            <p className="text-sm text-slate-500">{dates}</p>
          </div>
          {archived === false ? (
            <div className="flex items-center gap-3">
              <ArchiveButton
                id={id}
                onHandlerArchivedNote={onHandlerArchivedNote}
              />
              <DeleteButton id={id} deleteNote={onHandlerDeleteActiveNote} />
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <UnArchiveButton
                id={id}
                onHandlerUnArchivedPage={onHandlerUnArchivedPage}
              />
              <DeleteButton id={id} deleteNote={onHandlerDeleteArchivedNote} />
            </div>
          )}
        </div>
        <div>
          <p className="text-slate-500">{body}</p>
        </div>
      </div>
    </section>
  );
}
NotesDetail.propTypes = {
  title: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onHandlerDeleteActiveNote: PropTypes.func.isRequired,
  onHandlerDeleteArchivedNote: PropTypes.func.isRequired,
  onHandlerArchivedNote: PropTypes.func.isRequired,
  onHandlerUnArchivedPage: PropTypes.func.isRequired,
};
