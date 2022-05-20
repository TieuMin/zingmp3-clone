import React, { createContext, useEffect, useState } from "react";
import getSong from "../apis/SongApi";
import getInfoSong from "../apis/InfoSong";

export const GetSongContext = createContext();

const GetSongProvider = ({ children }) => {
  const prevSongDefaul = JSON.parse(localStorage.getItem("prevSongDefaul"));
  const [songData, setSongData] = useState(
    prevSongDefaul ? prevSongDefaul.songData : ""
  );
  const [infoSong, setInfoSong] = useState("");
  const [idSong, setIdSong] = useState("");
  const [loaderSong, setLoaderSong] = useState(false);
  const [loaderPlay, setLoaderPlay] = useState(false);
  const [btnPlay, setBtnPlay] = useState(false);
  const [playSong, setPlaySong] = useState(false);
  const [enableFooter, setEnableFooter] = useState(false);

  useEffect(() => {
    if (idSong !== "") {
      setLoaderSong(false);
      setLoaderPlay(true);

      const getSongData = async () => {
        await getSong(idSong).then((item) => {
          setSongData(item.data.data[128]);
        });
      };

      const getInfoData = async () => {
        await getInfoSong(idSong).then((item) => {
          setInfoSong(item.data.data);
        });
        setLoaderSong(true);
        setLoaderPlay(false);
      };
      getSongData();
      getInfoData();
    }
  }, [idSong]);

  useEffect(() => {
    if (songData && infoSong) {
      localStorage.setItem(
        "prevSongDefaul",
        JSON.stringify({
          songData,
          title: infoSong.title,
          artists: infoSong.artists,
          thumbnail: infoSong.thumbnail,
          duration: infoSong.duration,
          like: infoSong.like,
          listen: infoSong.listen,
          id: idSong,
        })
      );
      setEnableFooter(true);
    }
  }, [songData, infoSong]);

  const datas = {
    songData,
    infoSong,
    setIdSong,
    loaderSong,
    loaderPlay,
    btnPlay,
    setBtnPlay,
    idSong,
    enableFooter,
    playSong,
    setPlaySong,
  };
  return (
    <GetSongContext.Provider value={datas}>{children}</GetSongContext.Provider>
  );
};

export default GetSongProvider;
