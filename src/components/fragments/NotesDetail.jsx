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
  onHandlerDeleteNote,
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
          <div className="flex items-center gap-3">
            {archived === false ? (
              <ArchiveButton
                id={id}
                onHandlerArchivedNote={onHandlerArchivedNote}
              />
            ) : (
              <UnArchiveButton
                id={id}
                onHandlerUnArchivedPage={onHandlerUnArchivedPage}
              />
            )}

            <DeleteButton id={id} onHandlerDeleteNote={onHandlerDeleteNote} />
          </div>
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
  onHandlerDeleteNote: PropTypes.func.isRequired,
  onHandlerArchivedNote: PropTypes.func.isRequired,
  onHandlerUnArchivedPage: PropTypes.func.isRequired,
};
