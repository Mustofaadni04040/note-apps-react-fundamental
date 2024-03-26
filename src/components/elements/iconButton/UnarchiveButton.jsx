import PropTypes from "prop-types";
import { BiArchiveOut } from "react-icons/bi";

export default function UnArchiveButton({ onHandlerUnArchivedPage, id }) {
  return (
    <button
      type="button"
      title="unarsip"
      onClick={() => onHandlerUnArchivedPage(id)}
    >
      <BiArchiveOut className="text-sky-500 text-2xl hover:text-sky-600 duration-200" />
    </button>
  );
}
UnArchiveButton.propTypes = {
  onHandlerUnArchivedPage: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
