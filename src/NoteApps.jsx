import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
import Header from "./components/fragments/header/Header";
import Navigation from "./components/fragments/navbar/Navigation";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from "./pages/DetailPage";
import { deleteNote, getAllNotes } from "./utils/local-data";
import { useEffect, useState } from "react";
import AddNewNote from "./pages/AddNewNote";

export default function NoteApps() {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultKeyword = searchParams.get("keyword") || "";
  const [keyword, setKeyword] = useState(defaultKeyword);
  const navigate = useNavigate();

  useEffect(() => {
    const filtereNotes = getAllNotes().filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setNotes(filtereNotes);
  }, [keyword]);

  const handlerDeleteNote = (id) => {
    deleteNote(id);
    setNotes(getAllNotes());
    navigate("/");
  };

  const keywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  return (
    <div className="font-inter">
      <Header keyword={keyword} onKeywordChangeHandler={keywordChangeHandler} />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage notes={notes} />}></Route>
        <Route path="/archives" element={<ArchivePage />}></Route>
        <Route
          path="/notes/:id"
          element={<DetailPage onHandlerDeleteNote={handlerDeleteNote} />}
        ></Route>
        <Route path="//notes/new" element={<AddNewNote />}></Route>
      </Routes>
    </div>
  );
}
