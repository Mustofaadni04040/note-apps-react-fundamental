import NotesList from "../components/fragments/NotesList";
import PropTypes from "prop-types";

export default function HomePage({ notes, loading }) {
  return (
    <div className="container p-5 mx-auto mt-7">
      <NotesList notes={notes} loading={loading} />
    </div>
  );
}

HomePage.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ),
  loading: PropTypes.bool.isRequired,
};
