import ArchivedList from "../components/fragments/ArchivedList";
import PropTypes from "prop-types";

export default function ArchivePage({ archivedNotes }) {
  return (
    <div className="container p-5 mt-7 mx-auto">
      <ArchivedList archivedNotes={archivedNotes} />
    </div>
  );
}

ArchivePage.propTypes = {
  archivedNotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ),
};
