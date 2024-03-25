import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
import Header from "./components/fragments/header/Header";
import Navigation from "./components/fragments/navbar/Navigation";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from "./pages/DetailPage";
import {
  addNote,
  archiveNote,
  deleteNote,
  getActiveNotes,
  getAllNotes,
  getArchivedNotes,
} from "./utils/local-data";
import { useEffect, useState } from "react";
import AddNewNote from "./pages/AddNewNote";

export default function NoteApps() {
  const [notes, setNotes] = useState(getAllNotes());
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultKeyword = searchParams.get("keyword") || "";
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [archivedNote, setArchivedNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredNotes = getAllNotes().filter((note) => {
      return note.title.toLowerCase().includes(keyword.toLowerCase());
    });
    setNotes(filteredNotes);
  }, [keyword]);

  const handlerArchivedNote = (id) => {
    archiveNote(id);
    setArchivedNotes(getArchivedNotes());
    setNotes(getActiveNotes());
    navigate("/");
  };

  // const handlerActiveNote = (id) => {
  //   unarchiveNote(id);
  //   setArchivedNotes(getArchivedNotes());
  //   setNotes(getActiveNotes());
  //   navigate("/");
  // };

  const handlerDeleteNote = (id) => {
    deleteNote(id);
    setNotes(getAllNotes());
    navigate("/");
  };

  const keywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  function handlerAddNotes(note) {
    addNote(note);
    setNotes(getAllNotes());
    if (note.archived) {
      setArchivedNotes([...archivedNote, note]);
    } else {
      setNotes([...notes, note]);
    }
    navigate("/");
  }

  return (
    <>
      <Header keyword={keyword} onKeywordChangeHandler={keywordChangeHandler} />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage notes={notes} />}></Route>
        <Route
          path="/archives"
          element={<ArchivePage archivedNotes={archivedNote} />}
        ></Route>
        <Route
          path="/notes/:id"
          element={
            <DetailPage
              onHandlerDeleteNote={handlerDeleteNote}
              onHandlerArchivedNote={handlerArchivedNote}
            />
          }
        ></Route>
        <Route
          path="/notes/new"
          element={<AddNewNote onHandlerAddNote={handlerAddNotes} />}
        ></Route>
      </Routes>
    </>
  );
}
