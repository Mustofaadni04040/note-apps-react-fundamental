import PropTypes from "prop-types";
import DeleteButton from "../elements/iconButton/DeleteButton";
import ArchiveButton from "../elements/iconButton/ArchiveButton";
import UnArchiveButton from "../elements/iconButton/UnarchiveButton";
import parser from "html-react-parser";
import { useContext } from "react";
import { DarkMode } from "../../context/ThemeContext";

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
  const { isDarkMode } = useContext(DarkMode);
  return (
    <section className="mt-7 font-inter">
      <div
        className={`container mx-auto border p-5 border-slate-200 rounded-lg min-h-screen ${
          isDarkMode && "border-slate-900"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="mb-3">
            <h1
              className={`text-xl text-slate-600 font-bold ${
                isDarkMode && "text-slate-200"
              }`}
            >
              {title}
            </h1>
            <p
              className={`text-sm text-slate-500 ${
                isDarkMode && "text-slate-400"
              }`}
            >
              {dates}
            </p>
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
        <div
          className={`prose prose-slate break-words ${
            isDarkMode && "text-slate-400"
          }`}
        >
          {parser(body)}
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
