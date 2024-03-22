import PropTypes from "prop-types";
import { IoTrashOutline } from "react-icons/io5";

export default function DeleteButton({ onDeleteCardHandler, id }) {
  return (
    <button type="button" onClick={() => onDeleteCardHandler(id)}>
      <IoTrashOutline className="text-red-500 text-2xl" />
    </button>
  );
}
DeleteButton.propTypes = {
  onDeleteCardHandler: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
