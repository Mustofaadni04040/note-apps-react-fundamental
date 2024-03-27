import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../elements/button/Button";
import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default function NoteInput({ onHandlerAddNote }) {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  function onTitleChangeEventHandler(e) {
    setTitle(e.target.value);
  }
  function onBodyChangeEventHandler(e, editor) {
    setBody(editor.getData());
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
        <CKEditor
          editor={ClassicEditor}
          data={body}
          config={{
            placeholder: "Tulis catatanmu disini...",
          }}
          onChange={(e, editor) => onBodyChangeEventHandler(e, editor)}
        />
      </div>
      <div className="flex justify-end mt-7">
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
