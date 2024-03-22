import { showFormattedDate } from "../../../utils";
import NotesItem from "../notesItem/NotesItem";
import PropTypes from "prop-types";

export default function NotesList({ notes, onDeleteCardHandler }) {
  if (notes.length === 0) {
    return <h1 className="text-center mt-7">Tidak ada catatan</h1>;
  }

  return (
    <div className="grid gap-3">
      {notes.map((note) => {
        return (
          <NotesItem
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            dates={showFormattedDate(note.createdAt)}
            onDeleteCardHandler={onDeleteCardHandler}
          />
        );
      })}
    </div>
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
  onDeleteCardHandler: PropTypes.func.isRequired,
};
