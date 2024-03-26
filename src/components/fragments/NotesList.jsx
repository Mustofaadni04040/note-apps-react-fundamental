import { showFormattedDate } from "../../utils";
import NotesItem from "./NotesItem";
import PropTypes from "prop-types";

export default function NotesList({ notes }) {
  if (!notes || notes.length === 0) {
    return <h1 className="text-center mt-7">Tidak ada catatan</h1>;
  }

  return (
    <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 font-inter">
      {notes.map((note) => {
        return (
          <NotesItem
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            dates={showFormattedDate(note.createdAt)}
          />
        );
      })}
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
};
