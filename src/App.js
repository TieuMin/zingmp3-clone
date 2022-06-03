import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Discovery from "./pages/Discovery/Discovery";
import Personal from "./pages/Personal/Personal";
import Zingchart from "./pages/Zingchart/Zingchart";
import Follow from "./pages/Follow/Follow";
import NewSong from "./pages/NewSong/NewSong";
import Top100 from "./pages/Top100/Top100";
import Category from "./pages/Category/Category";
import Mv from "./pages/Mv/Mv";
import PersonalSong from "./pages/Personal/PersonalSong/PersonalSong";
import PersonalPODCAST from "./pages/Personal/PersonalPODCAST/PersonalPODCAST";
import PersonalMV from "./pages/Personal/PersonalMV/PersonalMV";
import PersonalALBUM from "./pages/Personal/PersonalALBUM/PersonalALBUM";
import ItemMv from "./pages/Mv/ItemMv/ItemMv";
import ListSong from "./pages/ListSong/ListSong";
import Footer from "./components/Footer/Footer";
import SearchData from "./pages/SearchData/SearchData";
import React, { useEffect, useContext } from "react";
import { GetSongContext } from "./context/GetSongProvider";
import MiniatureVideo from "./pages/MiniatureVideo/MiniatureVideo";
import PlayMv from "./pages/Mv/PlayMv/PlayMv";
import DetailSong from "./pages/DetailSong/DetailSong";

function App() {
  const prevSongDefaul = JSON.parse(localStorage.getItem("prevSongDefaul"));
  const { enableFooter } = useContext(GetSongContext);

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Discovery />} />
          <Route path="/personal" element={<Personal />}>
            <Route index element={<PersonalSong />} />
            <Route path="song" element={<PersonalSong />} />
            <Route path="podcast" element={<PersonalPODCAST />} />
            <Route path="album" element={<PersonalALBUM />} />
            <Route path="mv" element={<PersonalMV />} />
          </Route>
          <Route path="/zingchart" element={<Zingchart />} />
          <Route path="/follow" element={<Follow />} />
          <Route path="/newsong" element={<NewSong />} />
          <Route path="/top100" element={<Top100 />} />
          <Route path="/category" element={<Category />} />
          <Route path="/mv" element={<Mv />}>
            <Route index element={<ItemMv />} />
            <Route path=":id" element={<ItemMv />} />
          </Route>
          <Route path="/:album/:aliasTitle/:id" element={<ListSong />}></Route>
          <Route
            path="/tim-kiem/tat-ca/:keyword"
            element={<SearchData />}
          ></Route>
        </Routes>
        <PlayMv />
        <MiniatureVideo />
        {prevSongDefaul && <Footer />}
        <DetailSong />
      </BrowserRouter>
    </div>
  );
}

// viet nhanh component rafce

export default App;
