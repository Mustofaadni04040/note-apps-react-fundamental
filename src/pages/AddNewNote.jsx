import PropTypes from "prop-types";
import NoteInput from "../components/fragments/NoteInput";

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
