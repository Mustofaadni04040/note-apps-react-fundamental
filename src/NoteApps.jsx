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
import { useContext, useEffect, useState } from "react";
import AddNewNote from "./pages/AddNewNote";
import ErrorPage from "./pages/404";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {
  addNote,
  archiveNote,
  deleteNote,
  getActiveNotes,
  getArchivedNotes,
  getUserLogged,
  putAccessToken,
  unarchiveNote,
} from "./utils/network-data";
import { DarkMode } from "./context/ThemeContext";

export default function NoteApps() {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [authedUser, setAuthedUser] = useState(null);
  const [archivedNote, setArchivedNotes] = useState([]);
  const [initializing, setInitializing] = useState(true); //fase memuat data user
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode } = useContext(DarkMode);

  // console.log(archivedNote);
  useEffect(() => {
    async function fetchNotes() {
      if (authedUser) {
        const { data } = await getActiveNotes();
        setNotes(data);
        setArchivedNotes(await getArchivedNotes());
        setLoading(false);
      }
    }
    fetchNotes();
  }, [authedUser]);

  async function handlerActiveNote(id) {
    await unarchiveNote(id);
    const { data } = await getActiveNotes();
    setNotes(data);
    setArchivedNotes(await getArchivedNotes());
    navigate("/");
  }

  async function handlerArchivedNote(id) {
    await archiveNote(id);
    const { data } = await getArchivedNotes();
    // console.log(data);
    setNotes(await getActiveNotes());
    setArchivedNotes(data);
    navigate("/");
  }

  async function handlerDeleteActiveNote(id) {
    await deleteNote(id);
    const { data } = await getActiveNotes();
    setNotes(data);
    navigate("/");
  }

  async function handlerDeleteArchivedNote(id) {
    await deleteNote(id);
    const { data } = await getArchivedNotes();
    setArchivedNotes(data);
    navigate("/");
  }

  async function handlerAddNote(note) {
    await addNote(note);
    const { data } = await getActiveNotes();
    setNotes(data);
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
    const fetchData = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };
    fetchData();
  }, []);
  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  function onLogut() {
    setAuthedUser(null);
    putAccessToken("");
  }

  const isError =
    !["/", "/register", "/archives", "/notes/new"].includes(
      location.pathname
    ) && !location.pathname.startsWith("/notes/");

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <>
        {isError ? (
          <ErrorPage />
        ) : (
          <Routes>
            <Route
              path="/"
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        )}
      </>
    );
  }

  return (
    <>
      {isError ? (
        <ErrorPage />
      ) : (
        <div className={`${isDarkMode && "bg-slate-950"} min-h-screen`}>
          <Header
            keyword={keyword}
            onKeywordChangeHandler={keywordChangeHandler}
            logout={onLogut}
            name={authedUser.name}
          />
          <Navigation />
          <Routes>
            <Route
              path="/"
              element={<HomePage notes={filteredNotes} loading={loading} />}
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
            <Route
              path="/notes/new"
              element={<AddNewNote onHandlerAddNote={handlerAddNote} />}
            />
          </Routes>
        </div>
      )}
    </>
  );
}
