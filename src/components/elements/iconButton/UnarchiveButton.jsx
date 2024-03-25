import PropTypes from "prop-types";
import { BiArchiveOut } from "react-icons/bi";

export default function UnArchiveButton() {
  return (
    <button type="button" title="arsip">
      <BiArchiveOut className="text-sky-500 text-2xl hover:text-sky-600 duration-200" />
    </button>
  );
}
UnArchiveButton.propTypes = {
  onHandlerArchivedNote: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
