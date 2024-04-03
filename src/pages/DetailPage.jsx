import { useEffect, useState } from "react";
import NotesDetail from "../components/fragments/NotesDetail";
import { useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";
import { getNote } from "../utils/network-data";
import { FadeLoader } from "react-spinners";

export default function DetailPage({
  onHandlerDeleteActiveNote,
  onHandlerArchivedNote,
  onHandlerUnArchivedPage,
  onHandlerDeleteArchivedNote,
  loading,
}) {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchDetailNote = async () => {
      const { data } = await getNote(id);
      setNote(data);
    };
    fetchDetailNote();
  }, [id]);

  if (!note && loading === false) {
    return <FadeLoader color="#0ea5e9" className="mx-auto" />;
  }
  return (
    <>
      <NotesDetail
        id={note.id}
        title={note.title}
        body={note.body}
        archived={note.archived}
        dates={showFormattedDate(note.createdAt)}
        onHandlerDeleteActiveNote={onHandlerDeleteActiveNote}
        onHandlerDeleteArchivedNote={onHandlerDeleteArchivedNote}
        onHandlerArchivedNote={onHandlerArchivedNote}
        onHandlerUnArchivedPage={onHandlerUnArchivedPage}
      />
    </>
  );
}

DetailPage.propTypes = {
  onHandlerDeleteActiveNote: PropTypes.func.isRequired,
  onHandlerDeleteArchivedNote: PropTypes.func.isRequired,
  onHandlerArchivedNote: PropTypes.func.isRequired,
  onHandlerUnArchivedPage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
