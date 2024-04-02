import { useContext } from "react";
import { showFormattedDate } from "../../utils";
import NotesItem from "./NotesItem";
import PropTypes from "prop-types";
import { DarkMode } from "../../context/ThemeContext";
import { FadeLoader } from "react-spinners";

export default function NotesList({ notes, loading }) {
  const { isDarkMode } = useContext(DarkMode);
  if (!notes || (notes.length === 0 && loading === false)) {
    return (
      <h1 className={`text-center mt-7 ${isDarkMode && "text-slate-300"}`}>
        Tidak ada catatan
      </h1>
    );
  }

  return (
    <section
      className={`${
        loading === false &&
        "grid gap-3 sm:grid-cols-2 lg:grid-cols-4 font-inter"
      }`}
    >
      {loading === true ? (
        <FadeLoader color="#0ea5e9" className="mx-auto" />
      ) : (
        notes.map((note) => {
          return (
            <NotesItem
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
              dates={showFormattedDate(note.createdAt)}
            />
          );
        })
      )}
    </section>
  );
}
NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ),
  loading: PropTypes.bool.isRequired,
};
