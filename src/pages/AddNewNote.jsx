import { useState } from "react";
import parser from "html-react-parser";

export default function AddNewNote() {
  const [body, setBody] = useState("");
  const onInputHandler = (e) => {
    setBody(e.target.innerHTML);
  };
  return (
    <section className="mt-7">
      <div className="container mx-auto p-5">
        <div
          className="border border-slate-200 rounded outline-none focus:ring-1 focus:ring-sky-500"
          data-placeholder="Sebenarnya saya adalah ...."
          contentEditable
          onInput={onInputHandler}
        />
        <div>{parser(body)}</div>
      </div>
    </section>
  );
}
