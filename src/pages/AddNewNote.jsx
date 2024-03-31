import NoteInput from "../components/fragments/NoteInput";
import { addNote } from "../utils/network-data";
import { Navigate } from "react-router-dom";

export default function AddNewNote() {
  async function handlerAddNote(note) {
    await addNote(note);
    Navigate("/");
  }
  return (
    <section className="container mx-auto mt-7 p-5">
      <NoteInput onHandlerAddNote={handlerAddNote} />
    </section>
  );
}
