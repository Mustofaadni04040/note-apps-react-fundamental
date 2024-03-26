import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../elements/button/Button";
import { Link } from "react-router-dom";
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
          contentEditable="true"
          onInput={onBodyChangeEventHandler}
          className="border border-slate-200 p-5 mb-5 outline-none rounded focus:ring-1 focus:ring-sky-500 w-full min-h-80"
        />
      </div>
      <div className="flex justify-end">
        <Button type="submit">
          <Link onClick={onSubmitEventHandler} title="simpan">
            Tambah
          </Link>
        </Button>
      </div>
    </>
  );
}
NoteInput.propTypes = {
  onHandlerAddNote: PropTypes.func.isRequired,
};
