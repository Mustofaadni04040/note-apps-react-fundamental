import PropTypes from "prop-types";
import { IoTrashOutline } from "react-icons/io5";

export default function DeleteButton({ onHandlerDeleteNote, id }) {
  return (
    <button type="button" onClick={() => onHandlerDeleteNote(id)}>
      <IoTrashOutline className="text-red-500 text-2xl hover:text-red-600 duration-200" />
    </button>
  );
}
DeleteButton.propTypes = {
  onHandlerDeleteNote: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
