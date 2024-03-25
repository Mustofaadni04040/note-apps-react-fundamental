import { useState } from "react";
import PropTypes from "prop-types";
export default function NoteInput({ onHandlerAddNote }) {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  function onTitleChangeEventHandler(e) {
    setTitle(e.target.value);
  }
  function onBodyChangeEventHandler(e) {
    setBody(e.target.innerHTML);
  }
  function onSubmitEventHandler(e) {
    onHandlerAddNote({ title, body });
    e.preventDefault();
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Judul Catatan"
          value={title}
          onChange={onTitleChangeEventHandler}
          className="border border-slate-200 p-5 outline-none rounded focus:ring-1 focus:ring-sky-500 w-full"
        />
        <div
          type="text"
          data-placeholder="Deskripsi Catatan..."
          value={body}
          contentEditable
          onInput={onBodyChangeEventHandler}
          className="border border-slate-200 p-5 outline-none rounded focus:ring-1 focus:ring-sky-500 w-full min-h-80"
        />
      </div>
      <button
        onClick={onSubmitEventHandler}
        type="submit"
        title="simpan"
        className="border p-5"
      >
        Simpan
      </button>
    </>
  );
}
NoteInput.propTypes = {
  onHandlerAddNote: PropTypes.func.isRequired,
};
