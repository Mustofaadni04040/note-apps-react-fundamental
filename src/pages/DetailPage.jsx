import { useEffect, useState } from "react";
import { getNote } from "../utils/local-data";
import NotesDetail from "../components/fragments/notesDetail/NotesDetail";
import { useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

export default function DetailPage({
  onHandlerDeleteNote,
  onHandlerArchivedNote,
}) {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const selectedNote = getNote(id);
    setNote(selectedNote);
  }, [id]);

  if (!note) {
    return <p>Catatan tidak tersedia</p>;
  }
  return (
    <>
      <NotesDetail
        id={note.id}
        title={note.title}
        body={note.body}
        dates={showFormattedDate(note.createdAt)}
        onHandlerDeleteNote={onHandlerDeleteNote}
        onHandlerArchivedNote={onHandlerArchivedNote}
      />
    </>
  );
}
DetailPage.propTypes = {
  onHandlerDeleteNote: PropTypes.func.isRequired,
  onHandlerArchivedNote: PropTypes.func.isRequired,
};
