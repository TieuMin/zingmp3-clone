import React, { createContext, useEffect, useState } from "react";
import GetLyricApi from "../apis/GetLyricApi";

export const LyricContext = createContext();

const GetLyricProvider = ({ children }) => {
  const prevSongDefaul = JSON.parse(localStorage.getItem("prevSongDefaul"));
  const [idLyric, setIdLyric] = useState(
    prevSongDefaul ? prevSongDefaul.id : ""
  );
  const [lyric, setLyric] = useState("");
  const [dataLyric, setDataLyric] = useState("");

  const getApiLyric = async () => {
    await GetLyricApi(idLyric).then((items) => {
      setLyric(items.data.data);
    });
  };

  useEffect(() => {
    if (idLyric) {
      getApiLyric();
    }
  }, [idLyric]);

  const datas = {
    lyric,
    setIdLyric,
    dataLyric,
    setDataLyric,
  };

  return (
    <LyricContext.Provider value={datas}>{children}</LyricContext.Provider>
  );
};

export default GetLyricProvider;
