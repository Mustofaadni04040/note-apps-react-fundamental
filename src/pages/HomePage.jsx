import NotesList from "../components/fragments/notesList/NotesList";
import PropTypes from "prop-types";
import { deleteNote, getAllNotes } from "../utils/local-data";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getAllNotes());
  }, []);

  const handlerDeleteNote = (id) => {
    deleteNote(id);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <section className="mt-7">
      <div className="container p-5 mx-auto">
        <NotesList notes={notes} onDeleteCardHandler={handlerDeleteNote} />
      </div>
    </section>
  );
}

HomePage.propTypes = {
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
