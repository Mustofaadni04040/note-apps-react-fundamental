import PropTypes from "prop-types";
import { BiArchiveIn } from "react-icons/bi";

export default function ArchiveButton({ onHandlerArchivedNote, id }) {
  return (
    <button
      type="button"
      onClick={() => onHandlerArchivedNote(id)}
      title="arsip"
    >
      <BiArchiveIn className="text-sky-500 text-2xl hover:text-sky-600 duration-200" />
    </button>
  );
}
ArchiveButton.propTypes = {
  onHandlerArchivedNote: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
