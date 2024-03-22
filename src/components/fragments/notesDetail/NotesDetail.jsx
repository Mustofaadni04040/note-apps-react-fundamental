import PropTypes from "prop-types";

export default function NotesDetail({ title, dates, body }) {
  return (
    <>
      <div className="mb-3">
        <h1 className="text-xl text-slate-600 font-bold hover:text-slate-500">
          {title}
        </h1>
        <p className="text-sm text-slate-500">{dates}</p>
      </div>
      <div>
        <p className="text-slate-500">{body}</p>
      </div>
    </>
  );
}
NotesDetail.propTypes = {
  title: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
