import { Route, Routes } from "react-router-dom";
import Header from "./components/fragments/header/Header";
import Navigation from "./components/fragments/navbar/Navigation";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from "./pages/DetailPage";

export default function NoteApps() {
  return (
    <div className="font-inter">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/archives" element={<ArchivePage />}></Route>
        <Route path="/notes/:id" element={<DetailPage />}></Route>
      </Routes>
    </div>
  );
}
