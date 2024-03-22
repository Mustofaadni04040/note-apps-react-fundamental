import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NoteApps from "./NoteApps";
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NoteApps />
  </BrowserRouter>
);
