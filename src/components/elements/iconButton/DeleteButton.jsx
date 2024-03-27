import PropTypes from "prop-types";
import { IoTrashOutline } from "react-icons/io5";

export default function DeleteButton({ deleteNote, id }) {
  return (
    <button type="button" onClick={() => deleteNote(id)} title="hapus">
      <IoTrashOutline className="text-red-500 text-2xl hover:text-red-600 duration-200" />
    </button>
  );
}
DeleteButton.propTypes = {
  deleteNote: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
