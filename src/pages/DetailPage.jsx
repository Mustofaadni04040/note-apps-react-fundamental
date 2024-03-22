import { useEffect, useState } from "react";
import { getAllNotes } from "../utils/local-data";
import NotesDetail from "../components/fragments/notesDetail/NotesDetail";
import { useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";

export default function DetailPage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const notes = getAllNotes();
    const selectedNote = notes.find((note) => note.id === id);
    setNote(selectedNote);
  }, [id]);

  if (!note) {
    return <p>Catatan tidak tersedia</p>;
  }
  return (
    <section className="container p-5 mx-auto mt-7">
      <NotesDetail
        id={note.id}
        title={note.title}
        body={note.body}
        dates={showFormattedDate(note.createdAt)}
      />
    </section>
  );
}
