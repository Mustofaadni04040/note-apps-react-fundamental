import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
import Header from "./components/fragments/Header";
import Navigation from "./components/fragments/Navigation";
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
  unarchiveNote,
} from "./utils/local-data";
import { useEffect, useState } from "react";
import AddNewNote from "./pages/AddNewNote";
import ErrorPage from "./pages/404";

export default function NoteApps() {
  const [notes, setNotes] = useState(getAllNotes());
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultKeyword = searchParams.get("keyword") || "";
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [archivedNote, setArchivedNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredActiveNotes = getActiveNotes().filter((note) => {
      return note.title.toLowerCase().includes(keyword.toLowerCase());
    });
    setNotes(filteredActiveNotes);
    const filteredArchivedNotes = getArchivedNotes().filter((note) => {
      return note.title.toLowerCase().includes(keyword.toLowerCase());
    });
    setArchivedNotes(filteredArchivedNotes);
  }, [keyword]);

  const handlerArchivedNote = (id) => {
    archiveNote(id);
    setNotes(getActiveNotes());
    setArchivedNotes(getArchivedNotes());
    navigate("/");
  };

  const handlerActiveNote = (id) => {
    unarchiveNote(id);
    setNotes(getActiveNotes());
    setArchivedNotes(getArchivedNotes());
    navigate("/");
  };

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
    const newNote = addNote(note);
    setNotes([...notes, newNote]);
    if (newNote.archived) {
      setArchivedNotes([...archivedNote, newNote]);
    }
    navigate("/");
  }

  const isError =
    !["/", "/archives", "/notes/new"].includes(location.pathname) &&
    !location.pathname.startsWith("/notes/");

  return (
    <>
      {isError ? (
        <ErrorPage />
      ) : (
        <>
          <Header
            keyword={keyword}
            onKeywordChangeHandler={keywordChangeHandler}
          />
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage notes={notes} />}></Route>
            <Route
              path="/archives"
              element={<ArchivePage archivedNotes={archivedNote} />}
            />
            <Route
              path="/notes/:id"
              element={
                <DetailPage
                  onHandlerDeleteNote={handlerDeleteNote}
                  onHandlerArchivedNote={handlerArchivedNote}
                  onHandlerUnArchivedPage={handlerActiveNote}
                />
              }
            />
            <Route
              path="/notes/new"
              element={<AddNewNote onHandlerAddNote={handlerAddNotes} />}
            />
          </Routes>
        </>
      )}
    </>
  );
}
