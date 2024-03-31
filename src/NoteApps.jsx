import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Header from "./components/fragments/Header";
import Navigation from "./components/fragments/Navigation";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from "./pages/DetailPage";
import { useEffect, useState } from "react";
import AddNewNote from "./pages/AddNewNote";
import ErrorPage from "./pages/404";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {
  archiveNote,
  deleteNote,
  getActiveNotes,
  getArchivedNotes,
  getUserLogged,
  putAccessToken,
  unarchiveNote,
} from "./utils/network-data";

export default function NoteApps() {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });
  const [archivedNote, setArchivedNotes] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true); //fase memuat data user

  async function handlerActiveNote(id) {
    await unarchiveNote(id);
    const { data } = await getActiveNotes();
    setNotes(data);
    setArchivedNotes(await getArchivedNotes());
  }

  async function handlerArchivedNote(id) {
    await archiveNote(id);
    const { data } = getArchivedNotes();
    setNotes(await getActiveNotes());
    setArchivedNotes(data);
  }

  async function handlerDeleteActiveNote(id) {
    await deleteNote(id);
    const { data } = await getActiveNotes();
    setNotes(data);
  }

  async function handlerDeleteArchivedNote(id) {
    await deleteNote(id);
    const { data } = await getArchivedNotes();
    setArchivedNotes(data);
    navigate("/");
  }

  function keywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await getUserLogged();
        setAuthedUser(data);
        setInitializing(false);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
    // return() => {

    // }
  }, []);
  async function onLoginSuccess({ accessToken }) {
    try {
      putAccessToken(accessToken);
      const { data } = await getUserLogged();
      setAuthedUser(data);
    } catch (error) {
      console.error(error);
    }
  }

  const isError =
    !["/", "/login", "/register", "/archives", "/notes/new"].includes(
      location.pathname
    ) && !location.pathname.startsWith("/notes/");

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <>
        <Routes>
          <Route
            path="/"
            element={<LoginPage loginSuccess={onLoginSuccess} />}
          />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </>
    );
  }

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
            <Route
              path="/"
              element={<HomePage notes={filteredNotes} />}
            ></Route>
            <Route
              path="/archives"
              element={<ArchivePage archivedNotes={archivedNote} />}
            />
            <Route
              path="/notes/:id"
              element={
                <DetailPage
                  onHandlerDeleteActiveNote={handlerDeleteActiveNote}
                  onHandlerDeleteArchivedNote={handlerDeleteArchivedNote}
                  onHandlerArchivedNote={handlerArchivedNote}
                  onHandlerUnArchivedPage={handlerActiveNote}
                />
              }
            />
            <Route path="/notes/new" element={<AddNewNote />} />
          </Routes>
        </>
      )}
    </>
  );
}
