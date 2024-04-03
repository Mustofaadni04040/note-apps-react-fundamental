import { useContext } from "react";
import { DarkMode } from "../../context/ThemeContext";
import { showFormattedDate } from "../../utils";
import ArchivedItems from "./ArchivedItems";
import PropTypes from "prop-types";

export default function ArchivedList({ archivedNotes }) {
  const { isDarkMode } = useContext(DarkMode);
  if (archivedNotes.length === 0) {
    return (
      <h1 className={`text-center mt-7 ${isDarkMode && "text-slate-300"}`}>
        Tidak ada catatan
      </h1>
    );
  }

  return (
    <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 font-inter">
      {archivedNotes.map((note) => {
        return (
          <ArchivedItems
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            dates={showFormattedDate(note.createdAt)}
          />
        );
      })}
    </section>
  );
}
ArchivedList.propTypes = {
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
