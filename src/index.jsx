import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NoteApps from "./NoteApps";
import "./styles/style.css";
import ThemeContextProvider from "./context/ThemeContext";
import LocaleContextProvider from "./context/LocaleContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <LocaleContextProvider>
      <BrowserRouter>
        <NoteApps />
      </BrowserRouter>
    </LocaleContextProvider>
  </ThemeContextProvider>
);
