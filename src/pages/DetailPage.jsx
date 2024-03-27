import { useEffect, useState } from "react";
import { getNote } from "../utils/local-data";
import NotesDetail from "../components/fragments/NotesDetail";
import { useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

export default function DetailPage({
  onHandlerDeleteActiveNote,
  onHandlerArchivedNote,
  onHandlerUnArchivedPage,
  onHandlerDeleteArchivedNote,
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
        archived={note.archived}
        dates={showFormattedDate(note.createdAt)}
        onHandlerDeleteActiveNote={onHandlerDeleteActiveNote}
        onHandlerDeleteArchivedNote={onHandlerDeleteArchivedNote}
        onHandlerArchivedNote={onHandlerArchivedNote}
        onHandlerUnArchivedPage={onHandlerUnArchivedPage}
      />
    </>
  );
}
DetailPage.propTypes = {
  onHandlerDeleteActiveNote: PropTypes.func.isRequired,
  onHandlerDeleteArchivedNote: PropTypes.func.isRequired,
  onHandlerArchivedNote: PropTypes.func.isRequired,
  onHandlerUnArchivedPage: PropTypes.func.isRequired,
};
