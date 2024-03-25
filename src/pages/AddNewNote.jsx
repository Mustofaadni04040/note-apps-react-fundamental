import NoteInput from "../components/fragments/noteInput/NoteInput";
import PropTypes from "prop-types";

export default function AddNewNote({ onHandlerAddNote }) {
  return (
    <section className="container mx-auto mt-7 p-5">
      <NoteInput onHandlerAddNote={onHandlerAddNote} />
    </section>
  );
}
AddNewNote.propTypes = {
  onHandlerAddNote: PropTypes.func.isRequired,
};
