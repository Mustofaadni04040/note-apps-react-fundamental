import { useEffect, useState } from "react";
import NotesList from "../components/fragments/notesList/NotesList";
import { getAllNotes } from "../utils/local-data";

export default function HomePage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getAllNotes());
  }, []);

  return (
    <section className="mt-7">
      <div className="container p-5 mx-auto">
        <NotesList notes={notes} />
      </div>
    </section>
  );
}
