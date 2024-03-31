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
    e.preventDefault();
    onHandlerAddNote({ title, body });
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
            placeholder: "Sebenarnya saya adalah...",
          }}
          onChange={(e, editor) => onBodyChangeEventHandler(e, editor)}
          onReady={(editor) => {
            editor.editing.view.change((writer) => {
              writer.setStyle(
                "height",
                "300px",
                editor.editing.view.document.getRoot()
              );
            });
          }}
        />
      </div>
      <div className="flex justify-end mt-7">
        <Button
          type="submit"
          classname="flex items-center gap-1 py-1 px-3 rounded bg-sky-500 text-white hover:bg-sky-600 duration-200"
          onClick={onSubmitEventHandler}
        >
          <Link title="simpan">Tambah</Link>
        </Button>
      </div>
    </>
  );
}
NoteInput.propTypes = {
  onHandlerAddNote: PropTypes.func.isRequired,
};
